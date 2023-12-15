import styled from "styled-components";
import { SidebarProps } from "./types";

export const Sidebar = styled.div<SidebarProps>`
  width: 300px;
  background-color: #fff;
  top: 0;
  left: 0;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */

  transition: left 0.3s ease-in-out;
  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width:300px;
    height: 178px;
  }
  @media (max-width: 767px) {
    left: ${({ isopen }) => (isopen ? "0" : "-250px")};
  }
`;
export const Header = styled.header`
 
  @media (max-width: 767px) {
    width: 100%;
    height: 70px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */
    z-index: 999;
    display: flex;
    align-items: center;

    .img-mobile{
    }
  }
`;
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 767px) {
    width: 50%;
    height: 100%;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */
    background-color: #fff;
    top: 8.3%;
    position: absolute;
    z-index: 999;
    margin: 0;
  }
`;

export const MenuItem = styled.li<SidebarProps>`
  padding: 15px;
  display: flex;
  gap: 0.5rem;
  &.disabled {
    opacity: 0.5; /* Estilo para itens desabilitados */
    pointer-events: none; /* Desabilitar eventos de clique */
    cursor: not-allowed; /* Cursor não permitido */
  }

  &.activated {
    background-color: #0098da;
    color: white;
  }
  &:hover {
    color: #fff;
    background-color: #0098da;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    color: black;
  }
  &.activated {
    background-color: #0098da;
    color: white;
  }
  /* Estiliza o último item */
  &:last-child {
    flex: 1;
    align-items: end;
  }

  /* Define estilos para o estado ativo */
`;
export const BurgerMenuContainer = styled.div`
  border: 1px solid #555;

  border-radius: 4px;
  padding: 5px 10px;
`;
export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    cursor: pointer;
    position: fixed;
    color: black;
    z-index: 999;
    right: 16px; /* Posicionamento no canto direito */
  }
`;
export const MenuIcon = styled.div`
  width: 18px;
  height: 1px;
  background-color: #555;
  margin: 4px 0;
  border-radius: 1px;
`;
