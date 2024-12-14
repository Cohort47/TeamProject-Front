import React, { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "./TourCard";
import TourSortSection from "../tourSort/TourSortSection";
import { sortTours, SortCriteria } from "../tourSort/sortTours";
import styles from "./TourList.module.css";
import TourSearch from "../tourSearch/TourSearch";
import Loader from "../loader/Loader";

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

interface Filter {
  country: string;
  city: string;
  date: string;
  days: number;
  tourists: number;
}

const TourList: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("rating_desc");
  const [visibleToursCount, setVisibleToursCount] = useState(8);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filter>({
    country: "",
    city: "",
    date: "",
    days: 0,
    tourists: 0,
  });

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

  if(err){
    console.log(err);
  }
  if(loading){
    return <Loader/>
  }

  //  Фильтрация туров
  const filterTours = (tours: Tour[], filters: Filter) => {
    return tours.filter((tour) => {
      const matchesCountry =
        !filters.country ||
        tour.country.trim().toLowerCase() ===
          filters.country.trim().toLowerCase();
      const matchesCity =
        !filters.city ||
        tour.city.trim().toLowerCase() === filters.city.trim().toLowerCase();
      const matchesDate =
        !filters.date ||
        (new Date(tour.startDate) <= new Date(filters.date) &&
          new Date(tour.endDate) >= new Date(filters.date));
      const matchesDuration = !filters.days || tour.duration >= filters.days;

      console.log("Tour:", tour);
      console.log("Country match:", matchesCountry);
      console.log("City match:", matchesCity);
      console.log("Date match:", matchesDate);
      console.log("Duration match:", matchesDuration);

      return matchesCountry && matchesCity && matchesDate && matchesDuration;
    });
  };

  console.log(filterTours);
  

  const filteredTours = filterTours(tours, filters);
  const sortedTours = sortTours(filteredTours, sortCriteria);
  const visibleTours = sortedTours.slice(0, visibleToursCount);
  console.log(filters);
  console.table(sortedTours);
  console.log(filteredTours);

  const handleViewAllClick = () => {
    setVisibleToursCount((prevCount) =>
      prevCount + 8 > tours.length ? tours.length : prevCount + 8
    );
  };

  const handleSearch = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <TourSearch onSearch={handleSearch} />
      <div className={styles.tourListContainer}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>ТУРЫ</h2>
          <TourSortSection onSortChange={setSortCriteria} />
        </div>

        <div className={styles.tourGrid}>
          {visibleTours.map((tour) => (
            <TourCard
              key={tour.id}
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
          <div className={styles.viewAllButtonContainer}>
            {visibleToursCount < sortedTours.length && (
              <button
                className={styles.viewAllButton}
                onClick={handleViewAllClick}
              >
                Больше вариантов
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TourList;
