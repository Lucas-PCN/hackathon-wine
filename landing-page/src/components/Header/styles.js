import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display:flex;
  padding: 1rem;
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
    background-color: #f08cc1;
    justify-content: space-between;
    border-radius:8px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
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
