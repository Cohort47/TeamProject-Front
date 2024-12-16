import React, { useState } from "react";
import styles from "./registrationForm.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 
import axios from "axios";
import Loader from "../loader/Loader";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegistration = async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      // Получение данных формы
      const formData = new FormData(event.currentTarget);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      try {
        setLoading(true);
        // Отправка POST-запроса на сервер
        const response = await axios.post("api/public/register", data);
  
        // Проверка успешного ответа
        if (response.status === 201 || response.status === 200) {
          console.log("Регистрация прошла успешно!");
          navigate("/login"); // Перенаправление на страницу входа
        }
      } catch (err: any) {
        // Обработка ошибок
        if (err.response && err.response.data.message) {
          setError(err.response.data.message); // Сообщение с сервера
        } else {
          setError("Произошла ошибка регистрации. Попробуйте еще раз.");
        }
      } finally {
        setLoading(false);
      }
    };


  if(loading){
    <Loader/>
  }

  if(error){
    console.log(error);
  }

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
          <RouterLink to="/login" className={styles.login}>
          Войти
        </RouterLink>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
