import React, { useState } from "react";
import styles from "./ToursCatalog.module.css";

type Tour = {
  id: number;
  title: string;
  description: string;
  duration: number;
  price: string;
  images: string[];
};

const ToursCatalog: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([
    {
      id: 1,
      title: "7 дневное путешествие в отель RIXOS ",
      description: "Горящее предложение!",
      price: "150",
      duration: 7,
      images: [
        "https://media.istockphoto.com/id/1364624347/de/foto/junge-frau-beim-schnorcheln-neben-einer-gr%C3%BCnen-schildkr%C3%B6te-in-einem-klaren-blauen-wasser.jpg?s=2048x2048&w=is&k=20&c=BruGqjmOvoWIRk4K6VCQMbId4dZCju2Fbp8ELosVw2c=",
        "https://media.istockphoto.com/id/1364624347/de/foto/junge-frau-beim-schnorcheln-neben-einer-gr%C3%BCnen-schildkr%C3%B6te-in-einem-klaren-blauen-wasser.jpg?s=2048x2048&w=is&k=20&c=BruGqjmOvoWIRk4K6VCQMbId4dZCju2Fbp8ELosVw2c=",
      ],
    },
    {
      id: 2,
      title: "Отдых на пляже",
      description: "Oтдых на солнечном пляже с белым песком.",
      price: "200",
      duration: 7,
      images: [
        "https://media.istockphoto.com/id/1813433942/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B0%D0%B4-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%BC-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%8B.jpg?s=2048x2048&w=is&k=20&c=gYCHxZe2T5lBnXUZwYJxsmYdT8Q0tfZqyDi-oiFNwUc=",
        "https://media.istockphoto.com/id/624215532/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8F%D0%B6-%D0%BD%D0%B0-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5-%D0%BA%D0%B0%D0%BD%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%8B-%D0%B8%D1%8E%D0%BD%D1%8C-2016.jpg?s=2048x2048&w=is&k=20&c=OsuHPVSLBb3iT_DWFLb3BwqGqwsG7wUHXArrP-vhz4o=",
        "https://media.istockphoto.com/id/2153741067/de/foto/boardwalk-into-tropical-paradise-island.jpg?s=2048x2048&w=is&k=20&c=t1ns6T2wvkqNst4U8wh92eOd-emY1mG2nU4xoTt4_yo=",
      ],
    },
  ]);

  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditTour = (tour: Tour) => {
    setEditingTour(tour);
    setIsModalOpen(true);
  };

  const handleSaveTour = () => {
    if (editingTour) {
      setTours((prevTours) =>
        prevTours.map((tour) =>
          tour.id === editingTour.id ? editingTour : tour
        )
      );
      setEditingTour(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteTour = (id: number) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const handleAddImage = () => {
    if (editingTour) {
      setEditingTour({
        ...editingTour,
        images: [...editingTour.images, ""],
      });
    }
  };

  const handleDeleteImage = (index: number) => {
    if (editingTour) {
      setEditingTour({
        ...editingTour,
        images: editingTour.images.filter((_, i) => i !== index),
      });
    }
  };

  const handleImageChange = (index: number, value: string) => {
    if (editingTour) {
      const updatedImages = [...editingTour.images];
      updatedImages[index] = value;
      setEditingTour({
        ...editingTour,
        images: updatedImages,
      });
    }
  };

  return (
    <div className={styles.toursCatalog}>
      <h2 className={styles.catalogTitle}>Каталог туров</h2>
      <button className={styles.addTourBtn}>Добавить тур</button>

      <div className={styles.toursList}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.tourCard}>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <p>Продолжительность: {tour.duration} дней</p>
            <p>Цена: {tour.price}€</p>
            <div className={styles.images}>
              {tour.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Tour ${index + 1}`}
                  className={styles.image}
                />
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => handleEditTour(tour)}
                className={styles.editBtn}
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDeleteTour(tour.id)}
                className={styles.deleteBtn}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingTour && (
        <div className={styles.modalOverlay}>
          <div className={styles.editTourForm}>
            <h3>Редактировать тур</h3>
            <input
              type="text"
              placeholder="Название"
              value={editingTour.title}
              onChange={(e) =>
                setEditingTour({ ...editingTour, title: e.target.value })
              }
              className={styles.input}
            />
            <textarea
              placeholder="Описание"
              value={editingTour.description}
              onChange={(e) =>
                setEditingTour({ ...editingTour, description: e.target.value })
              }
              className={styles.textarea}
            />
            <input
              type="text"
              placeholder="Продолжительность (дни)"
              value={editingTour.duration.toString()}
              onChange={(e) =>
                setEditingTour({
                  ...editingTour,
                  duration: parseInt(e.target.value.replace(/[^0-9]/g, ""), 10),
                })
              }
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Цена"
              value={editingTour.price}
              onChange={(e) =>
                setEditingTour({
                  ...editingTour,
                  price: e.target.value.replace(/[^0-9.]/g, ""),
                })
              }
              className={styles.input}
            />

            <div className={styles.imagesSection}>
              <h4>Фотографии</h4>
              {editingTour.images.map((image, index) => (
                <div key={index} className={styles.imageRow}>
                  <input
                    type="text"
                    placeholder="Ссылка на изображение"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                    className={styles.deleteBtn}
                  >
                    Удалить
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddImage}
                className={styles.addBtn}
              >
                Добавить изображение
              </button>
            </div>

            <button onClick={handleSaveTour} className={styles.saveBtn}>
              Сохранить изменения
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className={styles.cancelBtn}
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToursCatalog;
