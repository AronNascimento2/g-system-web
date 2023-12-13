import { useEffect, useState } from "react";
import {
  BurgerMenu,
  BurgerMenuContainer,
  Header,
  Menu,
  MenuIcon,
  MenuItem,
  Sidebar,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../utils/useAuth";
import { ROUTES_PATHS } from "../../../../../constants/routePaths";

export const SideBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item.name);
    item.onClick();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userPermissions = user && user.Permissions ? user.Permissions : [];

  const menuItems = ROUTES_PATHS.filter(
    (route) => route.isPrivate && userPermissions.includes(route.title) // Filter based on permissions
  ).map((route) => ({
    name: route.title,
    onClick: () => navigate(route.path),
  }));

  // Adicionar item "Sair" para o logout
  const logoutItem = {
    name: "Sair",
    onClick: handleLogout,
  };

  return (
    <>
      <Header>
        {isMobile && (
          <>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ maxWidth: "100px", height: "auto" }}
            />{" "}
            <BurgerMenu onClick={toggleMenu}>
              <BurgerMenuContainer>
                <MenuIcon />
                <MenuIcon />
                <MenuIcon />
              </BurgerMenuContainer>
            </BurgerMenu>
          </>
        )}
      </Header>
      {isMobile && isOpen && (
        <Menu>
          {menuItems.map((item) => (
            <MenuItem
              onClick={() => {
                handleMenuItemClick(item);
                setIsOpen(false); // Fechar o menu após clicar em um item
              }}
              key={item.name}
              className={activeItem === item.name ? "activated" : ""}
            >
              {item.name}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleMenuItemClick(logoutItem)}>
            {logoutItem.name}
          </MenuItem>
        </Menu>
      )}
      {!isMobile && (
        <Sidebar>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />{" "}
          <Menu>
            {menuItems.map((item) => (
              <MenuItem
                onClick={() => {
                  if (userPermissions.includes(item.name)) {
                    handleMenuItemClick(item);
                  }
                }}
                key={item.name}
                className={`${activeItem === item.name ? "activated" : ""} ${
                  !userPermissions.includes(item.name) ? "disabled" : ""
                }`}
                disabled={!userPermissions.includes(item.name)}
              >
                {item.name}
              </MenuItem>
            ))}
            <MenuItem onClick={logoutItem.onClick}>{logoutItem.name}</MenuItem>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};
