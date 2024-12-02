import React, { useState } from "react";
import TourCard from "./TourCard";
import TourSortSection from "../tourSort/TourSortSection";
import { sortTours, SortCriteria } from "../tourSort/sortTours";
import styles from "./TourList.module.css";
import TourSearch from "../tourSearch/TourSearch";

const toursTest = [
  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "1 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 1,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "2 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 2,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "3 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 3,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "4 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 4,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "5 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "6 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "7 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "8 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },

  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "9 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },
  {
    image:
      "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b7u1_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=342x256",
    price: "9 888",
    name: "Club Privé By Rixos Gocek",
    location: "Гечек , Турция",
    rating: 5,
  },


];
//Tours from bd
interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  startDate: string;
  endDate: string;
  state: string;
  photoLinks: string[];
  country: string;
  city: string;
}


const TourList: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("rating_desc");
  const [visibleToursCount, setVisibleToursCount] = useState(8);
  //tours from bd 
  const [tours, setTours] = useState<Tour[]>([]);

   // Получаем туры с сервера, убрать коментарий после подключения бд 
  //  useEffect(() => {
  //   axios
  //     .get("/api/tours")
  //     .then((response) => {
  //       setTours(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при получении данных о турах:", error);
  //     });
  // }, []);


  const sortedTours = sortTours(toursTest, sortCriteria);

  const visibleTours = sortedTours.slice(0, visibleToursCount);

  const handleViewAllClick = () => {
    setVisibleToursCount(visibleToursCount + 8 > toursTest.length ? toursTest.length : visibleToursCount + 8);
  };

  return (
    <>
      <TourSearch />
      <div className={styles.tourListContainer}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>ТУРЫ</h2>
          <TourSortSection onSortChange={setSortCriteria} />
        </div>

        <div className={styles.tourGrid}>
          {visibleTours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}

          {visibleToursCount < sortedTours.length && (
            <div className={styles.viewAllButtonContainer}>
              <button
                className={styles.viewAllButton}
                onClick={handleViewAllClick}
              >
                Больше вариантов
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TourList;
