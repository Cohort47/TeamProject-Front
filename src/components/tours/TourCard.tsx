import React from "react";
import { Link } from 'react-router-dom';
import styles from "./TourCard.module.css";


interface TourCardProps {
  id: number;
  title: string;
  price: number;
  duration: number;
  photoLinks: string[];
  country: string;
  city: string;
  rating: number
}

const TourCard: React.FC<TourCardProps> = ({
  id,             
  title,
  price,
  duration,
  photoLinks,
  country,
  city,
  rating,
}) => {
  return (
    <div className={styles.tourCard}>
      {/* Для картинки используем первое фото из photoLinks */}
      <img src={photoLinks[0]} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.priceRating}>
          <span className={styles.price}>{price} €</span>
          <span className={styles.rating}>{"★".repeat(rating)}</span>
        </div>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.location}>{city}, {country}</p>
        <Link to={`/tour/${id}`}>
          <button className={styles.buttonRooms}>Детальная информация</button>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
