import React from "react";
import styles from "./AccountManagement.module.css";
import { Link } from "react-router-dom";

const AccountManagement: React.FC = () => {
  const logout = () => {
    localStorage.setItem("token", "");
  }
  return (
    <section className={styles.accountManagement} id="account-management">
      <h2 className={styles.title}>Управление аккаунтом</h2>

      <div className={styles.managementOptions}>
        <div className={styles.option}>
          <span className={styles.optionLabel}>Личные данные</span>
          <button className={styles.editButton}>Просмотреть</button>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLabel}>Поездки и бронирования</span>
          <button className={styles.editButton}>Просмотреть</button>
        </div>
      </div>

      <div className={styles.saveContainer}>
        <div className={styles.buttons}>
          <Link to="/" onClick={logout} className={styles.saveButton}>
            Выйти из аккаунта
          </Link>
          <Link to="/" className={styles.saveButton}>
            Назад
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccountManagement;
