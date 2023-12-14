import { useEffect, useMemo, useState } from "react";
import {
  BurgerMenu,
  BurgerMenuContainer,
  Header,
  Menu,
  MenuIcon,
  MenuItem,
  Sidebar,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../utils/useAuth";
import { ROUTES_PATHS } from "../../../../../constants/routePaths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user,logo } = useAuth();

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const userPermissions = useMemo(() => {
    return user?.Permissions ?? [];
  }, [user]);

  const menuItems = useMemo(() => {
    return ROUTES_PATHS.filter(
      (route) => route.isPrivate && userPermissions.includes(route.title)
    ).map((route) => ({
      name: route.title,
      path: route.path,
      onClick: () => navigate(route.path),
      icon: route.icon,
    }));
  }, [userPermissions, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const logoutItem = {
    name: "Sair",
    onClick: handleLogout,
  };

  useEffect(() => {
    const pathname = location.pathname;
    const activeRoute = ROUTES_PATHS.find((route) =>
      pathname.startsWith(route.path)
    );

    if (activeRoute && userPermissions.includes(activeRoute.title)) {
      setActiveItem(activeRoute.title);
    }
  }, [location.pathname, userPermissions]);

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
    navigate(item.path);
    item.onClick();
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Header>
        {isMobile && (
          <>
            <img
            className="img-mobile"
              src={logo ?? ''}
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
                if (userPermissions.includes(item.name)) {
                  handleMenuItemClick(item);

                  setIsOpen(false); // Fechar o menu após clicar em um item
                }
              }}
              key={item.name}
              className={`${activeItem === item.name ? "activated" : ""} ${
                !userPermissions.includes(item.name) ? "disabled" : ""
              }`}
              disabled={!userPermissions.includes(item.name)}
            >
              <FontAwesomeIcon icon={item.icon as IconProp} /> {item.name}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleMenuItemClick(logoutItem)}>
            {logoutItem.name}
          </MenuItem>
        </Menu>
      )}
      {!isMobile && (
        <Sidebar>
          <div className="container-logo">
            <img
              src={logo ?? ''}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />{" "}
          </div>

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
                <FontAwesomeIcon icon={item.icon as IconProp} /> {item.name}
              </MenuItem>
            ))}
            <MenuItem onClick={logoutItem.onClick}>{logoutItem.name}</MenuItem>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};
