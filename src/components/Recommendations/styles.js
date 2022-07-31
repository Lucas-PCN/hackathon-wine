import styled from 'styled-components';

export const Title = styled.h1`
  color: #333;
  margin: 30px 0;
  text-align: center;
`;

export const RecommendationContainer = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 200px;
`;

export const RecommendationCardsContainer = styled.div`
  align-items: center;
  display: flex;
  overflow: auto;
  gap: 1rem;
  justify-content: center;
  padding: 20px;
  height: 448px;
  width: calc(100vw - 168px);
`;

export const RecommendationCard = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 230px;
  position: relative;

  div.feedback-container {
    align-items: center;
    display: flex;
    right: 12px;
    top: 12px;
    position: absolute;
  }

  div.feedback-container > span {
    color: gray;
    font-size: 0.8em;
    margin-top: 0;
    margin-right: 1px;
  }

  .feedback-label:last-of-type {
    margin-left: 8px;
  }

  img {
    height: 150px;
  }

  p {
    text-align: center;
  }

  span {
    text-align: center;
    font-size: 0.9em;
    margin-top: 12px;
  }

  span > span {
    text-decoration: line-through;
  }
`;

export const RecommendationFooter = styled.div`
  display: flex;
  margin-top: 30px;

  button {
    font-size: 1rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    color: white;
    cursor: pointer;
    font-weight: 700;
    border-radius: 4px;
    transition-duration: 300ms;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:first-child {
    background-color: ${({ theme }) => theme.primary};
    margin-right: 8px;
    padding:  0.5rem 2.5rem;
  }

  button:last-child {
    background-color: ${({ theme }) => theme.tertiary};
    padding: 0 12px;
  }
`;

export const PageButton = styled.button`
  align-self: center;
  cursor: pointer;
  padding: 80px 20px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PriceContainer = styled.div`
  margin-top: 12px;

  span:first-child {
    font-size: 0.7em;
    text-transform: uppercase;
    margin-right: 4px;
  }

  span:last-child {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.2em;
    font-weight: bold;
  }

  span.small {
    color: #222;
    font-size: 0.8em;
  }
`;

export const DiscountContainer = styled.div`
  align-self: stretch;
  border-top: 1px dashed silver;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  margin-top: 20px;

  span:first-child {
    color: gray;
    font-size: 1em;
    font-weight: bold;
    margin-right: 8px;
    text-decoration: line-through;
  }

  span:last-child {
    background-color: ${({ theme }) => theme.discount};
    border-radius: 4px;
    color: white;
    font-weight: bold;
    padding: 2px 4px;
  }
`;
