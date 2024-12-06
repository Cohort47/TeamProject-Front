import React, { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "./TourCard";
import TourSortSection from "../tourSort/TourSortSection";
import { sortTours, SortCriteria } from "../tourSort/sortTours";
import styles from "./TourList.module.css";
import TourSearch from "../tourSearch/TourSearch";


//Tours from bd
interface Tour {
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
  rating: 5;
}


const TourList: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("rating_desc");
  const [visibleToursCount, setVisibleToursCount] = useState(8);
  const [tours, setTours] = useState<Tour[]>([]);
  const [, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);

// Получаем туры с сервера, убрать коментарий после подключения бд 
useEffect(() => {
  setLoading(true);
  axios
    .get(`/api/tours`)
    .then((response) => {
      setTours(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Ошибка при получении данных о турах:", err);
      setError("Не удалось загрузить данные. Попробуйте позже.");
      setLoading(false);
    });
}, []);

  const sortedTours = sortTours(tours, sortCriteria);

 // const visibleTours = sortedTours.slice(0, visibleToursCount);

  const handleViewAllClick = () => {
    setVisibleToursCount((prevCount) =>
      prevCount + 8 > tours.length ? tours.length : prevCount + 8);
  };

  return (
    <>
      <TourSearch />
      <div className={styles.tourListContainer}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>ТУРЫ</h2>
          <TourSortSection onSortChange={setSortCriteria} />
        </div>

        <div className={styles.tourGrid}>
          {tours.map((tour) => (
             <TourCard
             id={tour.id}
             title={tour.title}
             price={tour.price}
             duration={tour.duration}
             photoLinks={tour.photoLinks}
             country={tour.country}
             city={tour.city}
             rating={tour.rating} 
           />
          ))}

          {visibleToursCount < sortedTours.length && (
            <div className={styles.viewAllButtonContainer}>
              <button
                className={styles.viewAllButton}
                onClick={handleViewAllClick}
              >
                Больше вариантов
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TourList;
