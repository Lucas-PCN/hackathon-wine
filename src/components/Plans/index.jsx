import React, { useEffect, useState } from 'react';
import {
  PlansContainer,
  PlansCard,
  PlansCardHeader,
  PlansCardBody,
  PlansCardFooter,
} from './styles';

import wines from '../../images/winesSection.png';
import api from '../../services/api';

export default function Plans() {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const modalities = await api.modalities();
        setPlans(modalities.plans);
        setLoading(false);
      } catch (err) {
        console.warn(err);
      }
    }

    setLoading(true);
    load();
  }, []);

  if (loading) return null;

  return (
    <PlansContainer>
      <h1 className="title">WineBox</h1>
      <img src={ wines } alt="vinhos" />
      {plans.map((plan) => (
        <PlansCard key={ plan.id }>
          <PlansCardHeader>
            <div className="card-plan-name">
              <span>{plan.name.split(' ')[0]}</span>
              <h3>{plan.name.split(' ')[1]}</h3>
            </div>

            <div className="card-plan-promotion">
              <h3>{plan.promotion}</h3>
            </div>
          </PlansCardHeader>
          <PlansCardBody>
            <p>
              De
              {' '}
              <span>
                {plan.price
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </span>
              {' '}
              por
            </p>
            <h2>
              {plan.priceWithDiscount
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              /mês
            </h2>

            <div>
              {plan.gift || 'nenhum brinde'}
            </div>
          </PlansCardBody>
          <PlansCardFooter>
            <button type="button">
              Assinar
              {' '}
              {plan.name.split(' ')[1]}
            </button>

          </PlansCardFooter>
        </PlansCard>
      ))}
    </PlansContainer>
  );
}
