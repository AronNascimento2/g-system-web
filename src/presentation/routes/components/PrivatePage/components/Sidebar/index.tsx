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
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const SideBar = () => {
  const { logout, user, logo } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const userPermissions = useMemo(() => {
    return user?.Permissions ?? [];
  }, [user]);

  const menuItems = useMemo(() => {
    return ROUTES_PATHS.filter((route) => route.isPrivate).map((route) => ({
      label:route.label,
      name: route.title,
      path: route.path,
      onClick: () => navigate(route.path),
      icon: route.icon,
    }));
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const logoutItem = {
    name: "Sair",
    onClick: handleLogout,
  };
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
    setIsMobile(window.innerWidth <= 1080);
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      <Header>
        {isMobile && (
          <>
            <img
              className="img-mobile"
              src={logo ?? ""}
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
              <FontAwesomeIcon icon={item.icon as IconProp} /> {item.label}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleMenuItemClick(logoutItem)}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            {logoutItem.name}
          </MenuItem>
        </Menu>
      )}
      {!isMobile && (
        <Sidebar>
          <div className="container-logo">
            <img
              src={logo ?? ""}
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
                <FontAwesomeIcon icon={item.icon as IconProp} /> {item.label}
              </MenuItem>
            ))}
            <MenuItem onClick={logoutItem.onClick}>
              {" "}
              <FontAwesomeIcon icon={faRightFromBracket} />
              {logoutItem.name}
            </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};
