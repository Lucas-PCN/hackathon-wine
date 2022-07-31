import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ elevated }) => (elevated ? 'white' : 'transparent')};
  box-shadow: ${({ elevated }) => (
    elevated && '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)')};
  display: flex;
  justify-content: space-around;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: 500ms;
  z-index: 1;
  
  img {
    width:150px
  }
`;

export const HeaderNav = styled.nav`
  display:flex;

  ul {
    align-items: center;
    background-color: #f08cc1;
    border-radius:8px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    padding: 1rem;

    li {
      cursor: pointer;
      list-style-type: none;
    }
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 2rem;

  img {
    cursor: pointer;
    width: max-content;
  }
`;
