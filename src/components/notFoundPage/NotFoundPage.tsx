import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/*");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>Упс! Страница не найдена.</p>
      <button className={styles.goHomeButton} onClick={handleGoHome}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
