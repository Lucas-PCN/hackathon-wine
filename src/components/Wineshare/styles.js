import styled from 'styled-components';

export const WineshareContainer = styled.section`
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 32px;
  }
`;

export const WineshareCard = styled.div`
  
  display:flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width:100%;

  .wineshare-functions {
      display: flex;
      width: 400px;
      flex-direction:column;
      justify-content: center;
     .wineshare-text {
      padding: 1rem;
      background-color: #fffe;
      display:flex;
      flex-direction: column;
      gap:1rem
    }
  }

  .wineshare-info {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding: 1rem;
    h1 {  
      font-size: 62px;
      width:300px;
    }

    span {
      color: #c81a78;
    }

    img {
      width: max-content;
    }

   
  }

  .wineshare-images {
    display: flex;
    align-items: flex-end;
    .ilustration {
      object-fit: contain;
    }

  }


`;
