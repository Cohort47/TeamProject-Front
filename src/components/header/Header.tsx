import React from "react";
import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Header.module.css";
import logo from "./berlin_small.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { text: "Главная", link: "/" },
    { text: "О нас", link: "/about-us" },
    { text: "Услуги", link: "services" },
    { text: "Преимущества", link: "advantages" },
    { text: "Туры", link: "/tours" },
    { text: "Контакты", link: "contacts" },
  ];

  const isAuthenticated = false;

  const handlePersonalAccountClick = () => {
    if (isAuthenticated) {
      navigate("/account-management");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.leftSection}>

            <div className={styles.logoLink}>
              <img
                src={logo}
                className={styles.headerLogo}
                alt="Travel Agency Logo"
              />
            </div>

          </div>
          <div className={styles.rightSection}>
            <RouterLink
              to="/profile"
              className={styles.personalAccount}
              onClick={handlePersonalAccountClick}
            >
              Личный кабинет
            </RouterLink>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <div className={styles.navContainer}>
            <ul className={styles.headerList}>
              {menuItems.map((item, index) => (
                <li className={styles.headerListItem} key={index}>
                  {location.pathname === "/" && !item.link.startsWith('/') ? (
                    <ScrollLink to={item.link} smooth={true} duration={500} className={styles.headerLink}>
                      {item.text.toUpperCase()}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.link.startsWith('/') ? item.link : `/?scrollTo=${item.link}`}
                      className={styles.headerLink}
                    >
                      {item.text.toUpperCase()}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
