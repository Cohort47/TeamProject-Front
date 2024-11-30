import React from "react";
import styles from "./homepage.module.css";
import image1 from "./photo/1.jpg";
import image2 from "./photo/2.jpg";
import image3 from "./photo/3.jpg";

const HomePage: React.FC = () => {
  const cards = [
    {
      image: image1,
      title: "Экскурсии",
      buttonText: "Подробнее",
    },
    {
      image: image2,
      title: "Экстремальные походы",
      buttonText: "Подробнее",
    },
    {
      image: image3,
      title: "Где кататься этой зимой",
      buttonText: "Подробнее",
    },
  ];

  return (
    <div className={styles.offers}>
      <div className={styles.offersTitle}>Спецпредложения</div>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h2 className={styles.title}>{card.title}</h2>
              <button className={styles.cardButton}>{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
