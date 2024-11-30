import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для перехода по маршрутам
import styles from "./homepage.module.css";
import imageSpetial1 from "./photo/1.jpg";
import imageSpetial2 from "./photo/2.jpg";
import imageSpetial3 from "./photo/3.jpg";
import imageService1 from "./photo/service_1.jpg";
import imageService2 from "./photo/service_2.jpg";
import imageService3 from "./photo/service_3.jpg";
import imageService4 from "./photo/service_4.jpg";

const HomePage: React.FC = () => {
  const cards = [
    {
      image: imageSpetial1,
      title: "Экскурсии",
      buttonText: "Подробнее",
      link: "/excursions"
    },
    {
      image: imageSpetial2,
      title: "Экстремальные походы",
      buttonText: "Подробнее",
      link: "/extreme-tours"
    },
    {
      image: imageSpetial3,
      title: "Где кататься этой зимой",
      buttonText: "Подробнее",
      link: "/winter-skiing"
    },
  ];

  const services = [
    {
      image: imageService1,
      title: "ПРЕМИАЛЬНОЕ ОБСЛУЖИВАНИЕ",
      link: "/premium"
    },
    {
      image: imageService2,
      title: "УСЛУГИ ГИДОВ",
      link: "/guides"
    },
    {
      image: imageService3,
      title: "НАШИ БАССЕЙНЫ",
      link: "/pools"
    },
    {
      image: imageService4,
      title: "ПРОКАТ ТРАНСПОРТ",
      link: "/transport-Rental"
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.offers}>
        <div className={styles.offersTitle}>Спецпредложения</div>
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.image} alt={card.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <Link to={card.link}>
                  <button className={styles.cardButton}>{card.buttonText}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.services}>
        <h2 className={styles.servicesTitle}>УСЛУГИ</h2>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <Link to={service.link} key={index} className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceCardTitle}>{service.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
