import React from "react";
import styles from "./AccountManagement.module.css";

const AccountManagement: React.FC = () => {
  return (
    <section className={styles.accountManagement} id="account-management">
      <h2 className={styles.title}>Управление аккаунтом</h2>

      <div className={styles.managementOptions}>
        <div className={styles.option}>
          <span className={styles.optionLabel}>Личные данные</span>
          <button className={styles.editButton}>Изменить</button>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLabel}>Поездки и бронирования</span>
          <button className={styles.editButton}>Изменить</button>
        </div>
      </div>

      <div className={styles.saveContainer}>
        <button className={styles.saveButton}>Сохранить</button>
      </div>
    </section>
  );
};

export default AccountManagement;
