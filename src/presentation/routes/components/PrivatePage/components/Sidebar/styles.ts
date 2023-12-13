import styled from "styled-components";
import { SidebarProps } from "./types";



export const Sidebar = styled.div<SidebarProps>`
  width: 250px;
  background-color: #fff;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  transition: left 0.3s ease-in-out;
  img {
    margin-left: 10px;
  }
  @media (max-width: 767px) {
    left: ${({ isopen }) => (isopen ? "0" : "-250px")};
  }
`;
export const Header = styled.header`
  @media (max-width: 767px) {
    width: 100%;
    height: 80px;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    img {
      margin-left: 10px;
    }
  }
`;
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-color: #fff;
    top: 6%;
    position:absolute;
  }
`;

export const MenuItem = styled.li<SidebarProps>`
  padding: 15px;
  display: flex;
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
    flex:1;
    align-items: end;
  }

  /* Define estilos para o estado ativo */
`;
export const BurgerMenuContainer = styled.div`
  border: 1px solid #777;

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
    right: 20px; /* Posicionamento no canto direito */
  }
`;
export const MenuIcon = styled.div`
  width: 22px;
  height: 2px;
  background-color: #555;
  margin: 4px 0;
  border-radius: 1px;
`;
