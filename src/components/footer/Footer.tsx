import React from "react";
import styles from "./Footer.module.css";
import logo from "./logo.png"; 
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBottom}>
          <div className={styles.footerLeft}>
            <p>© 2012–2020 Управляющая компания Объединённой сети «Berlin Travel Agency»</p>
            <p>Представленная на сайте информация носит справочный характер и не является публичной офертой</p>
            {/* <a  className={styles.userAgreement}>Пользовательское соглашение</a> */}
          </div>

          <div className={styles.footerCenter}>
            <p>BERLIN, MAUER STR. 53</p>
            <a href="tel:01717351599" className={styles.contactItem}>0171 7351599</a>
            <a href="tel:01717351589" className={styles.contactItem}>0171 7351589</a>
            <a href="mailto:berlin@gmail.com" className={styles.contactItem}>berlin@gmail.com</a>
            <a href="mailto:berlin_pr@gmail.com" className={styles.contactItem}>berlin_pr@gmail.com</a>
          </div>

          <div className={styles.footerRight}>
            <Link to="/" className={styles.logoLink}>
              <img src={logo} className={styles.footerLogo} alt="Berlin Travel Agency Logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;