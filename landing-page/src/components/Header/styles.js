import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display:flex;
  padding: 1rem;
  //background-color: #c81a78;
  background:transparent;
  justify-content: space-around;
  align-items: center;
  position:fixed;
  top:0;
  left:0;
  right:0;
  
  img {
    width:150px
  }
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
    gap: 2rem;
    li {
        cursor:pointer;
      list-style-type: none;
    }
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap:2rem;
  img {
    cursor:pointer;
    width: max-content;
  }
`;
