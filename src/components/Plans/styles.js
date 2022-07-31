import styled from 'styled-components';
import planBanner from '../../images/bg.png';

export const PlansContainer = styled.section`
  display: flex;
  padding: 1rem 0;
  background-image: url(${planBanner});
  background-repeat: no-repeat;
  background-size: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  img {
    margin: -16px 80px -16px 0;
  }

  .title {
    color: #fff;
    font-size: 2rem;
    margin: 30px 0;
    text-align: center;
    width: 100%;
  }
`;

export const PlansCard = styled.section`
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const PlansCardHeader = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.2rem;
  justify-content: space-between;

  .card-plan-name {
    font-size: 1.8rem;
    text-align: center;
  }

  .card-plan-promotion {
    background-color: #F79552;
    height:max-content;
    padding: 0 0.5rem;
    border-radius:16px;
    color: white;
    font-size: 20px;
    margin: -30px 0 10px;
  }

`;

export const PlansCardBody = styled.section`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  p {
    font-size: 0.8em;
    margin: 16px 0 0;
  }

  p > span {
    text-decoration: line-through;
  }
`;

export const PlansCardFooter = styled.section`
  button {
    padding:  0.5rem 2.5rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: #7EBC43;
    color: white;
    font-weight: 700;
    border-radius:16px;
  }
`;
