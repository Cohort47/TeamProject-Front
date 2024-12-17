import React from "react";
import styles from "./AccountManagement.module.css";
import { Link as RouterLink } from "react-router-dom";

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
          <RouterLink to="/account-details" className={styles.editButton}>Просмотреть</RouterLink>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLabel}>Поездки и бронирования</span>
          <RouterLink to="/account-tours" className={styles.editButton}>Просмотреть</RouterLink>
        </div>
      </div>

      <div className={styles.saveContainer}>
        <div className={styles.buttons}>
          <RouterLink to="/" onClick={logout} className={styles.saveButton}>
            Выйти из аккаунта
          </RouterLink>
          <RouterLink to="/" className={styles.saveButton}>
            Назад
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

export default AccountManagement;
