import React, { useCallback, useEffect, useState } from 'react';

import Loader from 'react-js-loader';

import {
  HeartIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';

import {
  Title,
  RecommendationContainer,
  RecommendationCard,
  RecommendationFooter,
  PageButton,
  PriceContainer,
  DiscountContainer,
} from './styles';

import theme from '../../theme';
import api from '../../services/api';

function Recommendations() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
        console.log(p);
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

        {isLoading ? <Loader bgColor={ theme.tertiary } type="spinner-cub" /> : (
          products.map((product) => (
            <RecommendationCard key={ product.id }>

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

                <button type="button">
                  <HeartIcon width={ 20 } />
                </button>
              </RecommendationFooter>

            </RecommendationCard>
          ))
        )}

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
