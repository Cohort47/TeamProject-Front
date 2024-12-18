import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ToursCatalog.module.css";

type Tour = {
  id: number;
  title: string;
  description: string;
  duration: number;
  price: string;
  images: string[];
  startDate?: string;
  endDate?: string;
};

const ToursCatalog: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const fetchTours = async () => {
    try {
      const response = await axios.get("/api/admin/tours");
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  
  const createTour = async (newTour: Tour) => {
    try {
      const response = await axios.post("/api/admin/tours", newTour);
      setTours((prevTours) => [...prevTours, response.data]);
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };

  
  const updateTour = async (id: number, updatedTour: Tour) => {
    try {
      const response = await axios.put(`/api/admin/tours/${id}`, updatedTour);
      setTours((prevTours) =>
        prevTours.map((tour) => (tour.id === id ? response.data : tour))
      );
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  
  const deleteTour = async (id: number) => {
    try {
      await axios.delete(`/api/admin/tours/${id}`);
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  
  const handleEditTour = (tour: Tour) => {
    setEditingTour(tour);
    setIsModalOpen(true);
  };


  const handleSaveTour = async () => {
    if (editingTour) {
      if (editingTour.id) {
        
        await updateTour(editingTour.id, editingTour);
      } else {
        
        await createTour(editingTour);
      }
      setEditingTour(null);
      setIsModalOpen(false);
    }
  };

  
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className={styles.toursCatalog}>
      <h2 className={styles.catalogTitle}>Каталог туров</h2>
      <button
        className={styles.addTourBtn}
        onClick={() => {
          setEditingTour({
            id: 0,
            title: "",
            description: "",
            duration: 0,
            price: "",
            images: [],
          });
          setIsModalOpen(true);
        }}
      >
        Добавить тур
      </button>
      <div className={styles.toursList}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.tourCard}>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <p>Продолжительность: {tour.duration} дней</p>
            <p>Цена: {tour.price}€</p>
            <p>Дата начала: {tour.startDate}</p>
            <p>Дата окончания: {tour.endDate}</p>
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
                onClick={() => deleteTour(tour.id)}
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
            <input
              type="date"
              placeholder="Дата начала"
              value={editingTour.startDate || ""}
              onChange={(e) =>
                setEditingTour({ ...editingTour, startDate: e.target.value })
              }
              className={styles.input}
            />
            <input
              type="date"
              placeholder="Дата окончания"
              value={editingTour.endDate || ""}
              onChange={(e) =>
                setEditingTour({ ...editingTour, endDate: e.target.value })
              }
              className={styles.input}
            />
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
