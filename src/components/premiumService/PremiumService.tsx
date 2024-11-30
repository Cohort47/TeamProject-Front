import React from "react";
import styles from "./premiumService.module.css";
import teamPhoto from "./teamPhoto.png";

const PremiumService: React.FC = () => {
  return (
    <section className={styles.premiumService} id="premium-Service">
      <h2 className={styles.title}>ПРЕМИАЛЬНОЕ ОБСЛУЖИВАНИЕ</h2>
      <div className={styles.photoContainer}>
        <img src={teamPhoto} alt="Our Team" className={styles.teamPhoto} />
      </div>
      <div className={styles.textContainer}>
        <p>
          Откройте двери в мир изысканного сервиса с Berlin Travel Agency. Мы
          предлагаем вам не просто путешествие, а эксклюзивное путешествие с
          безупречным вниманием к деталям. Насладитесь роскошью премиального
          обслуживания:
          <ul>
            <li>
              Индивидуальные туры и маршруты – каждое путешествие создается с
              учетом ваших предпочтений.
            </li>
            <li>
              Личное сопровождение – ваш персональный менеджер всегда на связи,
              чтобы решить любой вопрос.
            </li>
            <li>
              Привилегии и бонусы – доступ в VIP-зоны, первоклассные отели и
              эксклюзивные мероприятия.
            </li>
            <li>
              Комфорт и стиль – от трансфера на частных автомобилях до
              бронирования лучших ресторанов и люксов.
            </li>
          </ul>
        </p>
        <p>
          Доверьтесь BerlinTravelAgency – мы сделаем ваш отдых незабываемым!
        </p>
      </div>
    </section>
  );
};

export default PremiumService;
