import React from "react";
import styles from "./pools.module.css";
import poolPhoto from "./poolPhoto.png";

const Pools: React.FC = () => {
  return (
    <section className={styles.pools} id="pools">
      <h2 className={styles.title}>Наши бассейны</h2>
      <div className={styles.photoContainer}>
        <img src={poolPhoto} alt="Pools" className={styles.poolPhoto} />
        
      </div>
      <div className={styles.textContainer}>
        <p>
          Berlin Travel Agency приглашает вас насладиться отдыхом у лучших бассейнов в Германии. Каждый из них создан, чтобы подарить вам комфорт, расслабление и незабываемые впечатления.
        </p>
        <ul>
          <li>
            <strong>Эксклюзивный дизайн</strong> – изысканная архитектура и уютные зоны
            отдыха создают атмосферу абсолютной гармонии.
          </li>
          <li>
            <strong>Подогрев и комфорт</strong> – бассейны доступны в любое время года
            благодаря современным системам подогрева.
          </li>
          <li>
            <strong>Частные зоны</strong> – для вашего уединения и комфорта доступны
            отдельные VIP-кабаны и индивидуальные услуги.
          </li>
          <li>
            <strong>Сервис на высшем уровне</strong> – наслаждайтесь коктейлями и
            закусками прямо у воды благодаря нашему внимательному обслуживанию.
          </li>
        </ul>
        <p>
          Погрузитесь в мир роскоши и безмятежности с Berlin Travel Agency – отдых у
          бассейна станет незабываемой частью вашего путешествия!
        </p>
      </div>
    </section>
  );
};

export default Pools;
