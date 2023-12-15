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
  }
  .button{
    height: 35px;
    width: 20%;
  }
 
.filter{
}
  .input-search {
    flex: 1;
    height: 40px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid #ccc; /* Adicione uma borda sólida de 2px com cor cinza claro */
    padding: 0.5rem; /* Adicione um preenchimento para afastar o texto da borda */
  }
  
`;
