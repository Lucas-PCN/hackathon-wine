import React, { useCallback, useEffect, useState } from 'react';
import { HeaderContainer, HeaderIcons, HeaderNav } from './styles';
import logo from '../../images/wine.svg';
import lupa from '../../images/lupa.svg';
import avatar from '../../images/avatar.svg';
import sacola from '../../images/sacola.svg';
import heart from '../../images/heart.svg';

const ELEVATED_POSITION = 200;

function Header() {
  const [elevated, setElevated] = useState(false);

  const onScroll = useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    setElevated(winScroll > ELEVATED_POSITION);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <HeaderContainer elevated={ elevated }>
      <a href="http://wine.com.br">
        {' '}
        <img src={ logo } alt="" />
      </a>
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
      <HeaderIcons>
        <img height="40px" src={ lupa } alt="" />
        <img height="40px" src={ avatar } alt="" />
        <img height="40px" src={ sacola } alt="" />
        <img height="40px" src={ heart } alt="" />
      </HeaderIcons>
    </HeaderContainer>
  );
}

export default Header;
