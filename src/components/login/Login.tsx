import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 
import styles from "./login.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "../loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login: React.FC = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   // Формируем схему валидации с Yup
   const validationSchema = Yup.object({
    email: Yup.string()
      .email("Введите корректный email")
      .required("Введите email"),
    password: Yup.string()
      .min(8, "Пароль должен содержать минимум 8 символов")
      .required("Введите пароль"),
  });

  // Используем Formik для управления состоянием формы
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true); // Начинаем загрузку

      // Создаем объект с данными из полей
      const credentials = { email: values.email, password: values.password };

      // Отправляем запрос через axios
      axios.post('/api/auth', credentials)
        .then((response) => {
          const token = response.data.token;
          // Сохраняем токен в локальное хранилище
          localStorage.setItem("token", token);
          setLoading(false);
          navigate("/account-management");
        })
        .catch((err) => {
          console.error("Ошибка при входе:", err);
          setError("Неверный email или пароль. Пожалуйста, попробуйте снова.");
          setLoading(false);
        });
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>ФОРМА ВХОДА НА САЙТ</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Поле email */}
          <div className={styles.inputGroup}>
            <input
              name="email"
              type="email"
              placeholder="  Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${styles.input} ${formik.touched.email && formik.errors.email ? styles.error : ''}`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.errorMessage}>{formik.errors.email}</div>
            )}
          </div>

          {/* Поле password */}
          <div className={styles.passwordContainer}>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="  Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${styles.input} ${formik.touched.password && formik.errors.password ? styles.error : ''}`}
            />
            <span onClick={togglePasswordVisibility} className={styles.icon}>
              {passwordVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className={styles.errorMessage}>{formik.errors.password}</div>
            )}
          </div>

          {/* Вывод общей ошибки */}
          {error && <div className={styles.errorMessage}>{error}</div>}

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