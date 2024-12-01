import React from "react";
import styles from "./BookingSuccess.module.css";

const BookingSuccess: React.FC = () => {
  const bookingData = {
    hotelName: "Pyramos Hotel",
    address: "4 Ayias Anastasias Street, Kato Paphos, Paphos, 8041, Cyprus",
    phone: "+357 26 930222",
    price: "80$",
    nights: 2,
    breakfastIncluded: true,
    fullBoard: false,
    earlyCheckIn: false,
    taxi: false,
    checkInDate: "28 февраля 2024, среда",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{bookingData.hotelName}</h2>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.cellLabel}>Адрес</td>
            <td className={styles.cellValue}>{bookingData.address}</td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Телефон</td>
            <td className={styles.cellValue}>{bookingData.phone}</td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Цена</td>
            <td className={styles.cellValue}>{bookingData.price}</td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Количество ночей</td>
            <td className={styles.cellValue}>{bookingData.nights}</td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Завтрак включен</td>
            <td className={styles.cellValue}>
              {bookingData.breakfastIncluded ? "да" : "нет"}
            </td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Полный пансион</td>
            <td className={styles.cellValue}>
              {bookingData.fullBoard ? "да" : "нет"}
            </td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Ранний заезд</td>
            <td className={styles.cellValue}>
              {bookingData.earlyCheckIn ? "да" : "нет"}
            </td>
          </tr>
          <tr>
            <td className={styles.cellLabel}>Такси</td>
            <td className={styles.cellValue}>
              {bookingData.taxi ? "да" : "нет"}
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.checkIn}>
        <strong>Check-in:</strong> {bookingData.checkInDate}
      </p>
    </div>
  );
};

export default BookingSuccess;
