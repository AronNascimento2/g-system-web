import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
  .open-options-button {
    width: 30px;
    border-radius: 50%;
    height: 30px;
    outline: 0;
    border: none;
    background-color: #3498db;
    color: #fff;
  }
 
.filter{
    flex: 1;
}
  .input-search {
    flex: 3;
    height: 30px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid #ccc; /* Adicione uma borda sólida de 2px com cor cinza claro */
    padding: 0.5rem; /* Adicione um preenchimento para afastar o texto da borda */
  }
  
`;
