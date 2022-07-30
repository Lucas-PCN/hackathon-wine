import React from 'react';
import { HeaderContainer, HeaderNav } from './styles';

const Header = () => (
  <HeaderContainer>
    <h1>Wine</h1>
    <HeaderNav>
      <ul>
        <li>Home</li>
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </ul>
    </HeaderNav>
  </HeaderContainer>
);

export default Header;
