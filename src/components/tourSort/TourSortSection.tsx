import React from "react";
import { SortCriteria } from "./sortTours";
import styles from "./TourSortSection.module.css";

interface TourSortSectionProps {
  onSortChange: (criteria: SortCriteria) => void;
}

const TourSortSection: React.FC<TourSortSectionProps> = ({ onSortChange }) => {
  return (
    <div className={styles.sortSection}>
      <select
        className={styles.sortDropdown}
        onChange={(e) => onSortChange(e.target.value as SortCriteria)}
      >
        <option value="rating_desc">Рейтинг: по убыванию</option>
        <option value="rating_asc">Рейтинг: по возрастанию</option>
        <option value="price_desc">Цена: по убыванию</option>
        <option value="price_asc">Цена: по возрастанию</option>
      </select>
    </div>
  );
};

export default TourSortSection;
