import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./registrationForm.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Логика регистрации пользователя
        // После успешной регистрации, перенаправить на страницу логина
        navigate("/login");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationBox}>
        <h2 className={styles.title}>ФОРМА РЕГИСТРАЦИИ НА САЙТЕ</h2>
        <form onSubmit={handleRegistration}>
          <input
            name="firstName"
            type="text"
            placeholder="  Имя"
            className={styles.input}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="  Фамилия"
            className={styles.input}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="  Емайл"
            className={styles.input}
            required
          />

          <div className={styles.passwordContainer}>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="  Пароль"
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
          <Button type="submit">Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
