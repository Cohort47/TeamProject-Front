import React from "react";
import styles from "./TourCard.module.css";

interface TourCardProps {
  image?: string;
  price: string;
  name?: string;
  location?: string;
  rating: number;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  price,
  name,
  location,
  rating,
}) => {
  return (
    <div className={styles.tourCard}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.priceRating}>
          <span className={styles.price}>{price}</span>
          <span className={styles.rating}>{"★".repeat(rating)}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <button className={styles.buttonRooms}>Номера</button>
      </div>
    </div>
  );
};

export default TourCard;
