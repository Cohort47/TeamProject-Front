import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
          "Имя может содержать только буквы, пробелы и дефисы"
        )
        .max(20, "Имя не должно превышать 50 символов")
        .min(2, "Имя должено содержать минимум 2 символов")
        .required("Введите имя"),
      lastName: Yup.string()
        .matches(
          /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
          "Фамилия может содержать только буквы, пробелы и дефисы"
        )
        .max(20, "Фамилия не должна превышать 50 символов")
        .min(2, "Фамилия должена содержать минимум 2 символов")
        .required("Введите фамилию"),
      email: Yup.string()
        .email("Введите корректный email (например, user@example.com)")
        .required("Введите email"),
      password: Yup.string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
        .matches(
          /[A-Z]/,
          "Пароль должен содержать хотя бы одну заглавную букву"
        )
        .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
        .matches(
          /[!@#$%^&*]/,
          "Пароль должен содержать хотя бы один специальный символ"
        )
        .required("Введите пароль"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post("api/public/register", values);

        if (response.status === 201 || response.status === 200) {
          console.log("Регистрация прошла успешно!");
          navigate("/login");
        }
      } catch (err: any) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Произошла ошибка регистрации. Попробуйте еще раз.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={styles.registrationContainer}>
    <div className={styles.registrationBox}>
      <h2 className={styles.title}>ФОРМА РЕГИСТРАЦИИ НА САЙТЕ</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Имя */}
        <div className={styles.inputGroup}>
          <input
            name="firstName"
            type="text"
            placeholder="Имя"
            className={`${styles.input} ${formik.touched.firstName && formik.errors.firstName ? styles.error : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className={styles.errorMessage}>{formik.errors.firstName}</div>
          )}
        </div>

        {/* Фамилия */}
        <div className={styles.inputGroup}>
          <input
            name="lastName"
            type="text"
            placeholder="Фамилия"
            className={`${styles.input} ${formik.touched.lastName && formik.errors.lastName ? styles.error : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className={styles.errorMessage}>{formik.errors.lastName}</div>
          )}
        </div>

        {/* Емайл */}
        <div className={styles.inputGroup}>
          <input
            name="email"
            type="email"
            placeholder="Емайл"
            className={`${styles.input} ${formik.touched.email && formik.errors.email ? styles.error : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.errorMessage}>{formik.errors.email}</div>
          )}
        </div>

        {/* Пароль */}
        <div className={styles.passwordContainer}>
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Пароль"
            className={`${styles.input} ${formik.touched.password && formik.errors.password ? styles.error : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <span onClick={togglePasswordVisibility} className={styles.icon}>
            {passwordVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
          {formik.touched.password && formik.errors.password && (
            <div className={styles.errorMessage}>{formik.errors.password}</div>
          )}
        </div>

        <Button type="submit">Зарегистрироваться</Button>
        <RouterLink to="/login" className={styles.login}>
          Войти
        </RouterLink>
      </form>
      {loading && <Loader />}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  </div>
  );
};

export default RegistrationForm;
