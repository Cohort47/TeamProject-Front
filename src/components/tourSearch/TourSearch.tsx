import React, { useState } from "react";
import styles from "./TourSearch.module.css";

// Данные стран и городов
const countriesWithCities = {
  Исландия: ["Рейкьявик", "Акюрейри", "Коупавогюр"],
  Germany: ["Berlin", "Гамбург", "Munich", "Штутгарт", "Франкфурт"],
  Франция: ["Париж", "Лион", "Марсель", "Бордо", "Тулуза"],
  Чехия: ["Прага", "Брно", "Острава", "Пльзень"],
  Венгрия: ["Будапешт", "Дебрецен", "Сегед", "Мишкольц"],
  Словения: ["Любляна", "Марибор", "Крань"],
  Португалия: ["Лиссабон", "Порту", "Фару"],
  Хорватия: ["Загреб", "Сплит", "Дубровник"],
  Австрия: ["Вена", "Зальцбург", "Инсбрук", "Грац"],
  Испания: ["Мадрид", "Барселона", "Валенсия", "Севилья"],
  Греция: ["Афины", "Салоники", "Ираклион"],
  Италия: ["Рим", "Милан", "Венеция", "Неаполь"],
  Турция: ["Стамбул", "Анкара", "Измир", "Анталия", "Гечек"],
};

interface TourSearchProps {
  onSearch: (filters: {
    country: string;
    city: string;
    date: string;
    days: number;
    tourists: number;
  }) => void;
}

const TourSearch: React.FC<TourSearchProps> = ({ onSearch }) => {
  // Состояния для выбранной страны и города
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [days, setDays] = useState<number>(2);
  const [tourists, setTourists] = useState<number>(2);

  // Функция для обработки изменения страны
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCity(""); // Сбрасываем выбранный город при смене страны
  };

  // Функция для обработки изменения города
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    sessionStorage.setItem("date", date);
  };

  const handleAmountOfPeopleChange = (value: number) => {
    setTourists(value);
    sessionStorage.setItem("tourists", value.toString());
  };

  // Получаем список городов для выбранной страны
  const cities: string[] = selectedCountry
    ? countriesWithCities[
        selectedCountry as keyof typeof countriesWithCities
      ] || []
    : [];

  const handleSearchClick = () => {
    onSearch({
      country: selectedCountry,
      city: selectedCity,
      date: selectedDate,
      days,
      tourists,
    });
  };

  return (
    <div className={styles.tourSearchContainer}>
      <h2 className={styles.title}>ХОЧУ ТУР</h2>
      <div className={styles.searchBox}>
        <div className={styles.searchField}>
          <label>Страна</label>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="" disabled>
              Выберите страну
            </option>
            {Object.keys(countriesWithCities).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchField}>
          <label>Город</label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedCountry}
          >
            <option value="" disabled>
              {selectedCountry ? "Выберите город" : "Выберите страну"}
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.searchField} ${styles.dateField}`}>
          <label>Дата</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        <div className={`${styles.searchField} ${styles.smallField}`}>
          <label>Дней</label>
          <input
            type="number"
            value={days}
            min="1"
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>
        <div className={`${styles.searchField} ${styles.smallField}`}>
          <label>Туристы</label>
          <input
            type="number"
            value={tourists}
            min="1"
            onChange={(e) => handleAmountOfPeopleChange(Number(e.target.value))}
          />
        </div>
        <button className={styles.searchButton} onClick={handleSearchClick}>
          Найти
        </button>
      </div>
    </div>
  );
};
export default TourSearch;
