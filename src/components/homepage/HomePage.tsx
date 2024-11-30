import React from "react";
import styles from "./homepage.module.css";
import imageSpetial1 from "./photo/1.jpg";
import imageSpetial2 from "./photo/2.jpg";
import imageSpetial3 from "./photo/3.jpg";
import imageService1 from "./photo/service_1.jpg";
import  imageService2 from "./photo/service_2.jpg";
import  imageService3 from "./photo/service_3.jpg";
import  imageService4 from "./photo/service_4.jpg";
import { title } from "process";


const HomePage: React.FC = () => {
  const cards = [
    {
      image: imageSpetial1,
      title: "Экскурсии",
      buttonText: "Подробнее",
    },
    {
      image: imageSpetial2,
      title: "Экстримальные походы",
      buttonText: "Подробнее",
    },
    {
      image: imageSpetial3,
      title: "Где кататься этой зимой",
      buttonText: "Подробнее",
    },
  ];

  const services = [
    {
      image: imageService1,
      title: "ПРЕМИАЛЬНОЕ ОБСЛУЖИВАНИЕ",
    },
    {
      image: imageService2,
      title: "УСЛУГИ ГИДОВ",
    },
    {
      image: imageService3,
      title: "НАШИ БАССЕЙНЫ",
    },
    {
      image: imageService4,
      title: "ПРОКАТ ТРАНСПОРТ",
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
              <button className={styles.cardButton}>{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.services}>
      <h2 className={styles.servicesTitle}>УСЛУГИ</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.serviceImage}
            />
            <div className={styles.serviceCardTitle}>{service.title}</div>
          </div>
        ))}
      </div>
    </div>
    </div>

    
  );
};

export default HomePage;
