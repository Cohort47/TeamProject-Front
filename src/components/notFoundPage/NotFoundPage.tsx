import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>Упс! Страница не найдена.</p>
      <p className={styles.redirectMessage}>
        ЧЕРЕЗ 5 секунд ВАС ВЕРНЕТ НА ГЛАВНУЮ СТРАНИЦУ.
      </p>
      <button className={styles.goHomeButton} onClick={handleGoHome}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
