import React from "react";
import styles from "./premium.module.css";
import premiumPhoto from "./premiumPhoto.png";

const Premium: React.FC = () => {
  return (
    <section className={styles.premium} id="premium">
      <h2 className={styles.title}>Премиальное обслуживание</h2>
      <div className={styles.photoContainer}>
        <img
          src={premiumPhoto}
          alt="Premium Service"
          className={styles.premiumPhoto}
        />
      </div>
      <div className={styles.textContainer}>
        <p>
          Откройте двери в мир изысканного сервиса с Berlin Travel Agency. Мы
          предлагаем вам не просто путешествие, а эксклюзивное путешествие с
          безупречным вниманием к деталям.
        </p>
        <p>Насладитесь роскошью премиального обслуживания:</p>
        <ul>
          <li>
            Индивидуальные туры и маршруты – каждое путешествие создается с учетом ваших предпочтений.
          </li>
          <li>
            Личное сопровождение – ваш персональный менеджер всегда на связи, чтобы решить любой вопрос.
          </li>
          <li>
            Привилегии и бонусы – доступ в VIP-зоны, первоклассные отели и эксклюзивные мероприятия.
          </li>
          <li>
            Комфорт и стиль – от трансфера на частных автомобилях до бронирования лучших ресторанов и люксов.
          </li>
        </ul>
        <p>Доверьтесь Berlin Travel Agency – мы сделаем ваш отдых незабываемым!</p>
      </div>
    </section>
  );
};

export default Premium;
