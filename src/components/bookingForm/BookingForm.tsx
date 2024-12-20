import React, { useEffect, useState } from "react";
import styles from "./BookingForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import ModalPageBooking from "./ModalPageBooking";
import axios from "axios";

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
}

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const savedDate = sessionStorage.getItem("date");
  const savedAmountOfPeople = sessionStorage.getItem("tourists");
  const token = localStorage.getItem("token");
  const [tour, setTour] = useState<Tour | undefined>(undefined);
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<string>(
    savedDate ? savedDate : ""
  );
  const [selectedTourists, setSelectedTourists] = useState<number>(
    savedAmountOfPeople ? Number(savedAmountOfPeople) : 1
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [errorMessageDate, setErrorMessageDate] = useState<string | null>(null);
  const [errorMessageTorists, setErrorMessageTorists] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/tours/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tour details");
        }
        const data = await response.json();
        setTour(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (error) {
    console.log(error);
  }

  if (loading || !tour) {
    return <Loader />;
  }

  const handleDateChange = (e: string) => {
    setSelectedDate(e);

    const today = new Date();
    const selected = new Date(selectedDate);
    if (!(selected < today)) {
      setErrorMessageDate(null);
      return;
    }
    if (!(selectedDate > tour.endDate || selectedDate < tour.startDate)) {
      setErrorMessageDate(null);
      return;
    }
  };

  const handleCloseModal = () => {
    navigate("/tours");
  };

  const handleAmountOfPeopleChange = (value: number) => {
    setSelectedTourists(value);
    sessionStorage.setItem("tourists", value.toString());

    if (!(selectedTourists < 1)) {
      setErrorMessageTorists(null);
      return;
    }
  };

  const handleBooking = async () => {
    if (!selectedDate) {
      setErrorMessageDate("Пожалуйста, выберите дату!");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);
    if (selected < today) {
      setErrorMessageDate("Дата не может быть раньше сегодняшнего дня!");
      return;
    }
    if (selectedDate > tour.endDate || selectedDate < tour.startDate) {
      setErrorMessageDate("Дата вне допустимого диапазона!");
      return;
    }
    if (selectedTourists < 1) {
      setErrorMessageTorists("Введите корректное число туристов!");
      return;
    }
    if (errorMessageDate === null && errorMessageTorists === null) {
      try {
        // Пример данных для отправки
        const bookingData = {
          tourId: tour.id, // Используем tour.id для ID тура
          tourDate: selectedDate, // Дата бронирования
          amountOfPeople: selectedTourists, // Пример количества людей
        };


        // Отправка POST запроса на сервер
        const response = await axios.post("/api/bookings", bookingData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setIsModalOpen(true); // Открываем модальное окно с успешным бронированием
          sessionStorage.setItem("date", "");
          sessionStorage.setItem("tourists", "");

          console.log("GOOD");
        } else {
          setErrorMessageDate("Произошла ошибка при бронировании!");
        }
      } catch (error) {
        alert("Произошла ошибка при бронировании!");
        console.error(error);
      }
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяц (добавляем ведущий ноль)
    const day = date.getDate().toString().padStart(2, "0"); // День (добавляем ведущий ноль)
    const year = date.getFullYear(); // Год

    return `${month}/${day}/${year}`; // Форматируем в "mm/dd/yyyy"
  };

  const totalPrice = tour.price * selectedTourists;

  return (
    <div className={styles.container}>
      <div className={styles.tourTitle}>{tour.title}</div>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th className={styles.description}>Описание</th>
            <th>Цена</th>
            <th>Длительность</th>
            <th>Возможные даты</th>
            <th>Дата тура</th>
            <th>Число туристов</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tour.description}</td>
            <td>{tour.price}$</td>
            <td>{tour.duration} дней</td>
            <td>
              С {formatDate(tour.startDate)} до {formatDate(tour.endDate)}
            </td>
            <td>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
              />
              {errorMessageDate && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {errorMessageDate}
                </div>
              )}
            </td>
            <td>
              <input
                id="tourists"
                type="text" // меняем на text
                value={selectedTourists}
                onChange={(e) => {
                  handleAmountOfPeopleChange(Number(e.target.value)); // обновляем значение
                }}
                className={styles.touristsInput}
              />
              {errorMessageTorists && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {errorMessageTorists}
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Модальное окно */}
      {isModalOpen && (
        <ModalPageBooking
          message={`Вы успешно забронировали тур "${tour?.title}" на дату ${selectedDate}`}
          onClose={handleCloseModal}
        />
      )}

      <div className={styles.totalPrice}>
        <p>Итоговая цена: {totalPrice}$</p>
      </div>

      <div className={styles.summary}>
        <button className={styles.bookNow} onClick={handleBooking}>
          Я бронирую
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
