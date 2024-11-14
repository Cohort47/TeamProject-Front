import React from 'react';
import styles from './Header.module.css';
import logo from  './berlin_small.png.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.leftSection}>
            <a href="#" className={styles.logoLink}>
              <img src={logo} className={styles.headerLogo} alt="Travel Agency Logo" />
            </a>
          </div>
          <div className={styles.rightSection}>
          <a href="#" className={styles.personalAccount}>
            Личный кабинет
          </a>
          </div>
        </div>

        
        <div className={styles.headerBottom}>
          <div className={styles.navContainer}>
            <ul className={styles.headerList}>
              {['О нас', 'Услуги', 'Преимущества', 'Туры', 'Отели', 'Контакты'].map((item, index) => (
                <li className={styles.headerListItem} key={index}>
                  <a href={`#${item.toLowerCase()}`} className={styles.headerLink}>
                    {item.toUpperCase()}
                  </a>
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