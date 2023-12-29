import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  
  .open-options-button {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    outline: 0;
    border: none;
    background-color: #3498db;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 

  }

  .button{
    height: 35px;
    width: 20%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */

  }
 

  .input-search {
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */
    font-size: 16px;
    height: 40px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid #ccc;
    padding-left:4rem; /* Adicione uma borda sólida de 2px com cor cinza claro */
    padding: 0.5rem; /* Adicione um preenchimento para afastar o texto da borda */
  }
  
`;
