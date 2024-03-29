import React, { useCallback, useEffect, useState } from 'react';

import Loader from 'react-js-loader';

import {
  AnnotationIcon,
  HeartIcon as HeartOutline,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';

import {
  HeartIcon as HeartSolid,
  StarIcon,
} from '@heroicons/react/solid';

import {
  Title,
  RecommendationContainer,
  RecommendationCardsContainer,
  RecommendationCard,
  RecommendationFooter,
  PageButton,
  PriceContainer,
  DiscountContainer,
} from './styles';

import useFavorites from '../../store/favorites';
import theme from '../../theme';
import api from '../../services/api';

const HeartIcon = {
  true: <HeartSolid width={ 20 } />,
  false: <HeartOutline width={ 20 } />,
};

function Recommendations() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { favorites, handleFavorite } = useFavorites((state) => state);

  const handlePage = useCallback((to) => {
    switch (to) {
    case 'next':
      setPage((prev) => prev + 1);
      break;
    default:
      setPage((prev) => prev - 1);
    }
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const p = await api.products(page);
        if (!totalPages) setTotalPages(p.totalPages);
        setProducts(p.items);
        setLoading(false);
      } catch (err) {
        console.warn(err);
      }
    }

    setLoading(true);
    load();
  }, [totalPages, page]);

  if (products.length === 0) {
    return (
      <Loader bgColor={ theme.tertiary } type="spinner-cub" />
    );
  }

  return (
    <>
      <Title>Recomendados</Title>
      <RecommendationContainer>
        <PageButton
          disabled={ page <= 1 }
          onClick={ () => handlePage('prev') }
        >
          <ChevronDoubleLeftIcon width={ 24 } />
        </PageButton>

        <RecommendationCardsContainer>
          {isLoading ? <Loader bgColor={ theme.tertiary } type="spinner-cub" /> : (
            products.map((product) => (
              <RecommendationCard key={ product.id }>

                <div className="feedback-container">
                  {product.rating !== 0 && product.rating !== undefined && (
                    <>
                      <span className="feedback-label">{product.rating}</span>
                      <StarIcon color="gold" width={ 20 } />
                    </>
                  )}

                  {product.avaliations !== 0 && product.avaliations !== undefined && (
                    <>
                      <span className="feedback-label">{product.avaliations}</span>
                      <AnnotationIcon color="gray" width={ 20 } />
                    </>
                  )}
                </div>

                <img src={ product.image } alt={ product.name } />

                <p>{product.name}</p>

                <PriceContainer>
                  <span>sócio wine:</span>
                  <span>
                    {product.priceMember
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                </PriceContainer>

                <PriceContainer>
                  <span>não sócio:</span>
                  <span className="small">
                    {product.priceNonMember
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                </PriceContainer>

                <DiscountContainer>
                  <span>
                    {product.price
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>

                  <span>
                    {product.discount}
                    % OFF
                  </span>
                </DiscountContainer>

                <RecommendationFooter>
                  <button type="button">
                    Adicionar
                  </button>

                  <button type="button" onClick={ () => handleFavorite(product) }>
                    {HeartIcon[!!favorites.find((fav) => fav.id === product.id)]}
                  </button>
                </RecommendationFooter>

              </RecommendationCard>
            ))
          )}
        </RecommendationCardsContainer>

        <PageButton
          disabled={ totalPages && page === totalPages }
          onClick={ () => handlePage('next') }
        >
          <ChevronDoubleRightIcon width={ 24 } />
        </PageButton>
      </RecommendationContainer>
    </>
  );
}

export default Recommendations;
