import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.css";
import logo from "./berlin_small.png";

const Header: React.FC = () => {
  const token = localStorage.getItem("token");
  const [link, setLink] = useState<string>("");
  const location = useLocation();
  const menuItems = [
    { text: "Главная", link: "/" },
    { text: "Туры", link: "/tours" },
    { text: "О нас", link: "/about-us" },
    { text: "Услуги", link: "services" },
    { text: "Преимущества", link: "advantages" },
    { text: "Контакты", link: "contacts" },
  ];

  useEffect(() => {
    if (token) {
      setLink("/account-management");
    } else {
      setLink("/login");
    }
  })

  const handlePersonalAccountClick = () => {
    if (token !== "") {
      setLink("/account-management");
    } else {
      setLink("/login");
    }
  };

  console.log(link);

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
              onClick={handlePersonalAccountClick}
              to={link}
              className={styles.personalAccount}
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
                  {location.pathname === "/" && !item.link.startsWith("/") ? (
                    <ScrollLink
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className={styles.headerLink}
                    >
                      {item.text.toUpperCase()}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={
                        item.link.startsWith("/")
                          ? item.link
                          : `/?scrollTo=${item.link}`
                      }
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
