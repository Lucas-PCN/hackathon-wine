import React from 'react';
import {
  PlansContainer,
  PlansCard,
  PlansCardHeader,
  PlansCardBody,
  PlansCardFooter,
} from './styles';

export default function Plans() {
  return (
    <PlansContainer>
      <PlansCard>
        <PlansCardHeader>
          <div className="card-plan-name">
            <span>Plano</span>
            <h3>Anual</h3>
          </div>
          <div className="card-plan-promotion">
            <h3>4 MESES OFF</h3>
          </div>
        </PlansCardHeader>
        <PlansCardBody>
          <p>
            De
            <span>R$ 99,90</span>
            por
          </p>
          <h2>
            R$
            <span>65,93</span>
            /mês
          </h2>

          <div>
            2 taças de cristal
          </div>
        </PlansCardBody>
        <PlansCardFooter>
          <button type="button">
            Assinar Anual
          </button>

        </PlansCardFooter>
      </PlansCard>
      <PlansCard>
        <PlansCardHeader>
          <div className="card-plan-name">
            <span>Plano</span>
            <h3>Anual</h3>
          </div>
          <div className="card-plan-promotion">
            <h3>4 MESES OFF</h3>
          </div>
        </PlansCardHeader>
        <PlansCardBody>
          <p>
            De
            <span>R$ 99,90</span>
            por
          </p>
          <h2>
            R$
            <span>65,93</span>
            /mês
          </h2>

          <div>
            2 taças de cristal
          </div>
        </PlansCardBody>
        <PlansCardFooter>
          <button type="button">
            Assinar Anual
          </button>

        </PlansCardFooter>
      </PlansCard>
    </PlansContainer>
  );
}
