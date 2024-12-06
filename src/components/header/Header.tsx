import React from "react";
import { useNavigate, Link as RouterLink, useLocation, Link } from "react-router-dom"; // Импортируем useLocation для определения текущего маршрута
import { Link as ScrollLink } from 'react-scroll'; // Импортируем Link как ScrollLink для прокрутки

import styles from "./Header.module.css";
import logo from "./berlin_small.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий маршрут
  const menuItems = [
    { text: "Главная", link: "/" },
    { text: "О нас", link: "/about-us" },
    { text: "Услуги", link: "services" },
    { text: "Преимущества", link: "advantages" },
    { text: "Туры", link: "/tours" },
    // { text: "Отели", link: "hotels" },
    { text: "Контакты", link: "contacts" },
  ];

  const isAuthenticated = false; // Замените это на вашу настоящую логику авторизации

  const handlePersonalAccountClick = () => {
    if (isAuthenticated) {
      navigate("/account-management"); // Перенаправление на управление аккаунтом, если авторизован
    } else {
      navigate("/login"); // Перенаправление на форму логина, если не авторизован
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
            <Link
              to="/profile"
              className={styles.personalAccount}
              onClick={handlePersonalAccountClick}
            >
              Личный кабинет
            </Link>
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
                    <RouterLink to={`${item.link}`} className={styles.headerLink}>
                      {item.text.toUpperCase()}
                    </RouterLink>
                  )}

                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.headerBtnLink}>Хочу тур</button>
            <button className={styles.headerBtnCall}>Обратный звонок</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
