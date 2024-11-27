import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./passwordRecoveryForm.module.css";
import Button from "../button/Button";

const PasswordRecoveryForm: React.FC = () => {
  const navigate = useNavigate();

  const handlePasswordRecovery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    fetch("/api/recover-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Логика восстановления пароля
        // После успешного восстановления, перенаправить на страницу логина
        navigate("/login");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.recoveryContainer}>
      <div className={styles.recoveryBox}>
        <h2 className={styles.title}>ФОРМА ДЛЯ ВОССТАНОВЛЕНИЯ ПАРОЛЯ</h2>
        <form onSubmit={handlePasswordRecovery}>
          <input
            name="email"
            type="email"
            placeholder="  Введите ваш емайл"
            className={styles.input}
            required
          />
          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;
