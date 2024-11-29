import React from "react";
import styles from "./bookingCars.module.css";
import carsPhoto from "./carsPhoto.png";

const BookingCars: React.FC = () => {
  return (
    <section className={styles.bookingCars} id="bookingCars">
      <h2 className={styles.title}>Прокат авто</h2>
      <div className={styles.photoContainer}>
        <img src={carsPhoto} alt="Car Rentals" className={styles.carsPhoto} />
      </div>
      <div className={styles.textContainer}>
        <p>
          Путешествуйте с комфортом и свободой благодаря нашему премиальному
          сервису по аренде транспорта. Berlin Travel Agency предоставляет
          лучшие варианты для каждого путешественника.
        </p>
        <ul>
          <li>
            <strong>Автомобили класса люкс</strong> – насладитесь поездкой на стильных и современных авто премиум-класса.
          </li>
          <li>
            <strong>Электрокары и эко-транспорт</strong> – для тех, кто ценит экологичность и инновации.
          </li>
          <li>
            <strong>Аренда с водителем</strong> – расслабьтесь и наслаждайтесь видом, пока наш профессиональный водитель заботится о вашем маршруте.
          </li>
          <li>
            <strong>Персонализированные услуги</strong> – помощь в выборе транспорта, бронирование в удобное для вас время и место.
          </li>
          <li>
            <strong>Специальные предложения</strong> – велосипеды, электросамокаты и даже яхты для уникальных впечатлений.
          </li>
        </ul>
        <p>
          С Berlin Travel Agency вы сможете добраться до любого уголка Германии стильно и с комфортом!
        </p>
      </div>
    </section>
  );
};

export default BookingCars;
