import React, { useState } from "react";
import styles from "./YourTours.module.css";

const YourTours: React.FC = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const tours = [
    {
      city: "Budapest",
      dates: "30 Jul 2015 – 13 Aug 2015",
      tours: [
        {
          name: "Pop Up Hostels - Citadella",
          img: "https://via.placeholder.com/80",
          country: "Hungary",
          price: "€225.28",
          status: "Completed",
          dates: "30 Jul 2015 – 13 Aug 2015",
        },
        {
          name: "Pyramos Hotel",
          img: "https://via.placeholder.com/80",
          country: "Cyprus",
          price: "€47.79",
          status: "Completed",
          dates: "28 Feb – 29 Feb",
        },
      ],
    },
    {
      city: "Mumbai",
      dates: "31 Dec 2017 – 2 Jan 2018",
      tours: [
        {
          name: "OYO 31006 Briteway",
          img: "https://via.placeholder.com/80",
          country: "India",
          price: "€46.00",
          status: "Cancelled",
          dates: "31 Dec 2017 – 2 Jan 2018",
        },
      ],
    },
    {
      city: "Agarvado",
      dates: "9 Dec 2017 – 10 Dec 2017",
      tours: [
        {
          name: "Capital O 19834 La Sella Resort",
          img: "https://via.placeholder.com/80",
          country: "Spain",
          price: "€17.00",
          status: "Cancelled",
          dates: "9 Dec 2017 – 10 Dec 2017",
        },
      ],
    },
  ];

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <section className={styles.yourTours} id="your-tours">
      <h2 className={styles.title}>Ваши туры</h2>

      {tours.map((city, index) => (
        <div key={index} className={styles.city}>
          <h3 className={styles.cityTitle}>{city.city}</h3>
          <p className={styles.cityDates}>{city.dates}</p>
          {city.tours.map((tour, idx) => {
            const uniqueIndex = index * 100 + idx;
            return (
              <div key={uniqueIndex} className={styles.tour}>
                <img
                  src={tour.img}
                  alt={tour.name}
                  className={styles.tourImage}
                />
                <div className={styles.tourDetails}>
                  <h4 className={styles.tourName}>{tour.name}</h4>
                  <p className={styles.tourDates}>
                    {tour.dates} – {tour.country}
                  </p>
                  <p
                    className={`${styles.tourStatus} ${
                      tour.status === "Completed"
                        ? styles.completed
                        : styles.cancelled
                    }`}
                  >
                    {tour.status}
                  </p>
                </div>
                <div className={styles.tourPriceContainer}>
                  <span className={styles.tourPrice}>{tour.price}</span>
                  <button
                    className={styles.menuButton}
                    onClick={() => toggleMenu(uniqueIndex)}
                  >
                    &#8226;&#8226;&#8226;
                  </button>
                  {openMenuIndex === uniqueIndex && (
                    <div className={styles.dropdownMenu}>
                      <button className={styles.dropdownItem}>
                        Посмотреть историю
                      </button>
                      <button className={styles.dropdownItem}>
                        Удалить бронирование
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default YourTours;
