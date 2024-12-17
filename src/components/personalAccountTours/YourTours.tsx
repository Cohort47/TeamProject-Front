import React, { useEffect, useState } from "react";
import styles from "./YourTours.module.css";
import axios from "axios";

// Интерфейсы для данных
interface UserResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface TourResponseDto {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  startDate: string;
  endDate: string;
  state: string;
  country: string;
  city: string;
  photoLinks: string[];
}

interface BookingResponseDto {
  id: number;
  user: UserResponseDto;
  tour: TourResponseDto;
  bookingDate: string;
  tourDate: string;
  amountOfPeople: number;
  state: string;
}

const YourTours: React.FC = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [tours, setTours] = useState<BookingResponseDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  // Функция для запроса данных туров
  const fetchTours = async () => {
    try {
      const response = await axios.get<BookingResponseDto[]>("/api/bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTours(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Ошибка при загрузке туров", err);
      setError("Не удалось загрузить туры.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.yourTours} id="your-tours">
      <h2 className={styles.title}>Ваши туры</h2>

      {tours.map((booking, index) => (
        <div key={booking.id} className={styles.tourContainer}>
          <div className={styles.tour}>
            <div className={styles.tourImageContainer}>
              {booking.tour.photoLinks.length > 0 ? (
                <img
                  src={booking.tour.photoLinks[0]}
                  alt={booking.tour.title}
                  className={styles.tourImage}
                />
              ) : (
                <div className={styles.tourImagePlaceholder}>Фото не доступно</div>
              )}
            </div>

            <div className={styles.tourDetails}>
              <h4 className={styles.tourName}>{booking.tour.title}</h4>
              <p className={styles.tourCity}>
                {booking.tour.city}, {booking.tour.country}
              </p>
              <p className={styles.tourDates}>
                Дата тура: {booking.tourDate}
              </p>
              <p className={styles.tourDuration}>
                Длительность: {booking.tour.duration} дня(ей)
              </p>
              <p className={styles.tourAmountOfPeople}>
                Количество людей: {booking.amountOfPeople}
              </p>
              <p
                className={`${styles.tourStatus} ${
                  booking.state === "BOOKED"
                    ? styles.booked
                    : booking.state === "CANCELED"
                    ? styles.available
                    : styles.cancelled
                }`}
              >
                {booking.state}
              </p>
            </div>

            <div className={styles.tourPriceContainer}>
              <span className={styles.tourPrice}>{booking.tour.price} €</span>
              
            </div>

            <div className={styles.menuButtonContainer}>
              <button
                className={styles.menuButton}
                onClick={() => toggleMenu(index)}
              >
                &#8226;&#8226;&#8226;
              </button>
              {openMenuIndex === index && (
                <div className={styles.dropdownMenu}>
                  <button className={styles.dropdownItem}>
                    Посмотреть историю
                  </button>
                  <button className={styles.dropdownItem}>
                    Удалить бронирование
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default YourTours;
