import React from "react";
import styles from "./guides.module.css";
import guidePhoto from "./guidePhoto.png";

const Guides: React.FC = () => {
  return (
    <section className={styles.guides} id="guides">
     <h2 className={styles.title}>Услуги гидов</h2>
      <div className={styles.photoContainer}>
        <img src={guidePhoto} alt="Guides" className={styles.guidePhoto} />
      </div>
      <div className={styles.textContainer}>
        <p>
          Berlin Travel Agency предлагает вам уникальную возможность узнать
          Германию с профессиональными гидами, которые сделают каждую экскурсию
          по-настоящему незабываемой.
        </p>
        <ul>
          <li>
            <strong>Индивидуальные экскурсии</strong> – маршруты, созданные
            специально для вас, чтобы познакомить вас с культурой и историей
            каждого города.
          </li>
          <li>
            <strong>Локальные эксперты</strong> – наши гиды не просто
            рассказывают, они оживляют историю, показывают скрытые жемчужины и
            делятся интересными фактами.
          </li>
          <li>
            <strong>Экскурсии на вашем языке</strong> – выберите удобный для вас
            язык, чтобы понять и насладиться каждой деталью.
          </li>
          <li>
            <strong>Гибкость и комфорт</strong> – мы адаптируем график экскурсий
            под ваши планы, чтобы сделать поездку максимально удобной.
          </li>
        </ul>
        <p>
          Берлин, Мюнхен, Гамбург, Франкфурт и другие города ждут вас. Откройте
          для себя Германию вместе с Berlin Travel Agency!
        </p>
      </div>
    </section>
  );
};

export default Guides;
