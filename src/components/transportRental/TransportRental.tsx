import React from "react";
import styles from "./transportRental.module.css";
import transportPhoto from "./transportPhoto.jpg";

const TransportRental: React.FC = () => {
  return (
    <section className={styles.transportRental} id="transport-Rental">
      <h2 className={styles.title}> ПРОКАТ ТРАНСПОРТА</h2>
      <div className={styles.photoContainer}>
        <img src={transportPhoto} alt="transport-Rental" className={styles.transportPhoto} />
      </div>
      <div className={styles.textContainer}>
        <p>
          Путешествуйте с комфортом и свободой благодаря нашему премиальному
          сервису по аренде транспорта. <strong>Berlin Travel Agency</strong>  предоставляет
          лучшие варианты для каждого путешественника:
          <ul>
            <li>
            <strong>Автомобили класса люкс</strong> – насладитесь поездкой на стильных и
              современных авто премиум-класса.
            </li>
            <li>
            <strong>Электрокары и эко-транспорт</strong> – для тех, кто ценит экологичность и
              инновации.
            </li>
            <li>
            <strong>Аренда с водителем </strong>– расслабьтесь и наслаждайтесь видом, пока наш
              профессиональный водитель заботится о вашем маршруте.
            </li>
            <li>
            <strong>Персонализированные услуги </strong>– помощь в выборе транспорта,
              бронирование в удобное для вас время и место.
            </li>
            <li>
            <strong>Специальные предложения</strong> – велосипеды, электросамокаты и даже яхты
              для уникальных впечатлений.
            </li>
          </ul>
        </p>
        <p>
          С <strong>Berlin Travel Agency</strong> вы сможете добраться до любого уголка Германии
          стильно и с комфортом!
        </p>
      </div>
    </section>
  );
};

export default TransportRental;
