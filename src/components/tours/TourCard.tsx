import React from "react";
import { Link } from 'react-router-dom';
import styles from "./TourCard.module.css";

interface TourCardProps {
  image?: string;
  price: string;
  name?: string;
  location?: string;
  rating: number;
}
interface TourCardPropsFromBd {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  startDate: string;
  endDate: string;
  state: string;
  photoLinks: string[];
  country: string;
  city: string;
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
          <span className={styles.price}>{price} €</span>
          <span className={styles.rating}>{"★".repeat(rating)}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <Link
          to={{
            pathname: `/tour/${1}`
            //state: props, 
          }}
        >
          <button className={styles.buttonRooms}>Детальная информация</button>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
