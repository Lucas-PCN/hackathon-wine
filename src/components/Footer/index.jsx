import React from 'react';
import { FooterContainer } from './styles';
import winerFooterIcon from '../../images/wineFooterIcon.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <img src={ winerFooterIcon } alt="" />
      <div className="about">
        <p>
          W2W E-Commerce de Vinhos S.A
        </p>
        <p>CNPJ: 09.813.204/0002-05</p>
      </div>

      <div className="footer">
        <span>
          SE BEBER, NÃO DIRIJA.
          APRECIE COM MODERAÇÃO.
          A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
        </span>
      </div>
    </FooterContainer>
  );
}
