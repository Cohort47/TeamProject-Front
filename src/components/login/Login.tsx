import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 
import styles from "./login.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "../loader/Loader";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true); // Начинаем загрузку

    // Создаем объект с данными из полей
    const credentials = { email, password };
    console.log(credentials);

    // Отправляем запрос через axios
    axios.post('/api/auth', credentials)
      .then((response) => {
        const token = response.data.token;
         // Сохраняем токен в локальное хранилище
        localStorage.setItem("token", token);
        setLoading(false);
        navigate("/account-management")
      })
      .catch((err) => {
        console.error("Ошибка при входе:", err);
        setError("Неверный email или пароль. Пожалуйста, попробуйте снова.");
        setLoading(false);
      });
  };

  if(error){
    console.log(error);
  }
  if(loading){
    return <Loader/>
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>ФОРМА ВХОДА НА САЙТ</h2>
        <form onSubmit={handleLogin}>
          <input
            name="email"
            //type="email"
            placeholder="  Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <div className={styles.passwordContainer}>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button type="button">
              <RouterLink to="/registration" className={styles.registrationLink}>Регистрация</RouterLink>
            </Button>
          </div>
        </form>

        <RouterLink to="/forgot-password" className={styles.forgotPassword}>
          Забыли пароль?
        </RouterLink>
      </div>
    </div>
  );
};

export default Login;