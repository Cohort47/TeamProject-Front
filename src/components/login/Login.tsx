import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
}

const Login: React.FC<LoginProps> = ({
  onRegisterClick,
  onForgotPasswordClick,
}) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Логика входа пользователя
        // После успешного входа, перенаправить на домашнюю страницу
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>ФОРМА ВХОДА НА САЙТ</h2>
        <form onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="  Email"
            className={styles.input}
            required
          />
          <div className={styles.passwordContainer}>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="  Password"
              className={styles.input}
              required
            />
            <span onClick={togglePasswordVisibility} className={styles.icon}>
              {passwordVisible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          <div className={styles.buttonGroup}>
            <Button type="submit">Войти</Button>
            <Button type="button" onClick={onRegisterClick}>
              Регистрация
            </Button>
          </div>
        </form>
        <button
          className={styles.forgotPassword}
          onClick={onForgotPasswordClick}
        >
          Забыли пароль?
        </button>
      </div>
    </div>
  );
};

export default Login;
