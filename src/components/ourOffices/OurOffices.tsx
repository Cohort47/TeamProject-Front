import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для перехода по маршрутам
import styles from "./ourOffices.module.css";

import Berlin_Gweg_Str_20 from "../ourOffices/public/BerlinGwegStr20.png";
import Berlin_Mauer_Str_53 from "../ourOffices/public/BerlinMauerStr53.png";
import Berlin_Seauer_Str_29 from "../ourOffices/public/BerlinSeauerStr29.png";
import Berlin_Spuer_Str_29 from "../ourOffices/public/BerlinSpuerStr29.png";

const OurOffices: React.FC = () => {
  const ourOffices = [
    {
      image: Berlin_Gweg_Str_20,
      text: "Berlin Gweg Str.20",
      link: "/BerlinGwegStr20",
    },
    {
      image: Berlin_Mauer_Str_53,
      text: "Berlin Mauer Str.53",
      link: "/BerlinMauerStr53",
    },
    {
      image: Berlin_Seauer_Str_29,
      text: "Berlin Seauer Str.29",
      link: "/BerlinSeauerStr29",
    },
    {
      image: Berlin_Spuer_Str_29,
      text: "Berlin Spuer Str.29",
      link: "/BerlinSpuerStr29",
    },
  ];

  return (
    <div className={styles.body}>
      <h2 className={styles.ourOfficesTitle}>НАШИ ОФИСЫ</h2>
      <div className={styles.ourOfficesContainer}>
        {ourOffices.map((office, index) => (
          <Link to={office.link} key={index} className={styles.ourOfficesCardLink}>
            <div className={styles.ourOfficesCard}>
              <img
                src={office.image}
                alt={office.text}
                className={styles.ourOfficesImage}
              />
              <div className={styles.ourOfficesCardContent}>
                <div className={styles.ourOfficesCardTitle}>{office.text}</div>
                <button className={styles.ourOfficesCardButton}>
                  Подробнее
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurOffices;
