import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display:flex;
  padding: 1rem;
  background-color: violet;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLogo = styled.img``;
export const HeaderNav = styled.nav`
  display:flex;
  ul {
    display: flex;
    background-color: yellow;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    li {
      list-style-type: none;
    }
  }
`;
