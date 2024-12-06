import React from "react";
import { Link } from "react-router-dom";
import styles from "./advantages.module.css";
import comfortIcon from "../advantages/pablik/icons/comfort.png";
import cleanlinessIcon from "../advantages/pablik/icons/cleanliness.png";
import serviceIcon from "../advantages/pablik/icons/service.png";
import perfectionIcon from "../advantages/pablik/icons/perfection.png";
import returnIcon from "../advantages/pablik/icons/return.png";
import issuesIcon from "../advantages/pablik/icons/issues.png";
import parkingIcon from "../advantages/pablik/icons/parking.png";
import firstPlaceIcon from "../advantages/pablik/icons/first-place.png";

interface Advantage {
  text: string;
  link: string;
  icon: string;
}

const Advantages: React.FC = () => {
  const advantages: Advantage[] = [
    {
      text: "УДОБНЫЕ УСЛОВИЯ ДЛЯ ВАШЕГО КОМФОРТА",
      link: "/comfort-conditions",
      icon: comfortIcon,
    },
    {
      text: "КРИСТАЛЬНАЯ ЧИСТОТА НОМЕРОВ",
      link: "/room-cleanliness",
      icon: cleanlinessIcon,
    },
    {
      text: "УДЕЛЯЕМ ВНИМАНИЕ ОРГАНИЗАЦИИ СЕРВИСА",
      link: "/service-organization",
      icon: serviceIcon,
    },
    {
      text: "СТРЕМИМСЯ К СОВЕРШЕНСТВУ",
      link: "/striving-for-perfection",
      icon: perfectionIcon,
    },
    {
      text: "ВЫ ЗАХОТИТЕ К НАМ ВЕРНУТЬСЯ",
      link: "/return-to-us",
      icon: returnIcon,
    },
    {
      text: "РЕШИМ ЛЮБОЙ ВОПРОС",
      link: "/solve-any-issue",
      icon: issuesIcon,
    },
    {
      text: "У НАС ВСЕГДА ЕСТЬ СВОБОДНЫЙ ПАРКИНГ",
      link: "/free-parking",
      icon: parkingIcon,
    },
    {
      text: "КАЖДЫЙ ГОД ЗАНИМАЕМ ПЕРВОЕ МЕСТО",
      link: "/first-place-every-year",
      icon: firstPlaceIcon,
    },
  ];

  return (
    <section className={styles.advantagesContainer} id="advantages">
    <div className={styles.advantagesContainer}>
      <h2 className={styles.title}>ПРЕИМУЩЕСТВА</h2>
      <div className={styles.advantagesList}>
        {advantages.map((advantage, index) => (
          <Link to={advantage.link} key={index} className={styles.link}>
            <div className={styles.advantageItem}>
              <div className={styles.advantageDiv}>
                <img src={advantage.icon} alt="" className={styles.icon} />
                <span className={styles.advantageText}>{advantage.text}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Advantages;
