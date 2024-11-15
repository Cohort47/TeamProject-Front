import React from "react";
import styles from "./TourSearch.module.css";

const TourSearch: React.FC = () => {
  return (
    <div className={styles.tourSearchContainer}>
      <h2 className={styles.title}>ХОЧУ ТУР</h2>
      <div className={styles.searchBox}>
        <div className={styles.searchField}>
          <label>Город вылета</label>
          <select>
            <option>Берлин</option>
            <option>Гамбург</option>
            <option>Дюссельдорф</option>
            <option>Ингольштадт</option>
            <option>Мангейм</option>
            <option>Мюнхен</option>
            <option>Оснабрюк</option>
            <option>Падерборн</option>
            <option>Росток</option>
            <option>Франкфурт-на-Майне</option>
            <option>Штутгарт</option>
          </select>
        </div>
        <div className={styles.searchField}>
          <label>Страна</label>
          <select>
            <option>Исландия</option>
            <option>Германия</option>
            <option>Франция</option>
            <option>Чехия</option>
            <option>Венгрия </option>
            <option>Словения </option>
            <option>Португалия </option>
            <option>Хорватия </option>
            <option>Австрия </option>
            <option>Испания </option>
            <option>Греция  </option>
            <option>Италия </option>
            <option>Турция </option>
          </select>
        </div>
        <div className={`${styles.searchField} ${styles.dateField}`}>
          <label>Дата прибытия</label>
          <input type="date" />
        </div>
        <div className={`${styles.searchField} ${styles.smallField}`}>
          <label>Ночей</label>
          <input type="number" defaultValue="7" min="1" />
        </div>
        <div className={`${styles.searchField} ${styles.smallField}`}>
          <label>Туристы</label>
          <input type="number" defaultValue="2" min="1" />
        </div>
        <button className={styles.searchButton}>Найти</button>
      </div>
    </div>
  );
};

export default TourSearch;
