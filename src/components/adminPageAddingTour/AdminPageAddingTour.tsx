import React, { useState, useRef } from "react";
import styles from "./AdminPageAddingTour.module.css";

const AdminPageAddingTour: React.FC = () => {
  const [formData, setFormData] = useState({
    tourName: "",
    duration: "",
    price: "",
    description: "",
     startDate: "",
     endDate: "",
    photos: [] as File[],
  });

  const [errors, setErrors] = useState({
    tourName: false,
    duration: false,
    price: false,
    description: false,
    photos: false,
  });
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const maxLengths = {
    tourName: 100,
    duration: 5,
    price: 20,
    description: 1500,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (value.length > maxLengths[name as keyof typeof maxLengths]) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));

    // Авторасширение текстового поля
    if (name === "description" && descriptionRef.current) {
      descriptionRef.current.style.height = "auto"; // Сбрасываем высоту
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Устанавливаем новую высоту
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const totalSizeMB = files.reduce((acc, file) => acc + file.size, 0) / (1024 * 1024);

    if (files.length + formData.photos.length > 10) {
      alert("Вы можете загрузить до 10 файлов.");
      return;
    }

    if (totalSizeMB > 20) {
      alert("Общий размер файлов не должен превышать 20 МБ.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files],
    }));

    setErrors((prev) => ({
      ...prev,
      photos: false,
    }));
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      tourName: formData.tourName === "",
      duration: formData.duration === "",
      price: formData.price === "",
      description: formData.description === "",
      photos: formData.photos.length === 0,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    console.log("Форма отправлена:", formData);
  };

  return (
    <section className={styles.addTour}>
      <h2 className={styles.title}>НОВЫЙ ТУР</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              Название тура
              <span
                className={styles.required}
                data-tooltip="Обязательное поле для заполнения"
              >
                *
              </span>
            </label>
            <input
              type="text"
              name="tourName"
              value={formData.tourName}
              onChange={handleInputChange}
              placeholder="Введите название тура"
              className={styles.input}
            />
            <div className={styles.charCount}>
              {formData.tourName.length}/{maxLengths.tourName}
            </div>
            {errors.tourName && (
              <span className={styles.error}>Обязательное поле для заполнения</span>
            )}
          </div>
        </div>





        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              Продолжительность тура
              <span
                className={styles.required}
                data-tooltip="Обязательное поле для заполнения"
              >
                *
              </span>
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="Введите продолжительность"
              className={styles.input}
            />
            {errors.duration && (
              <span className={styles.error}>Обязательное поле для заполнения</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>
              Цена
              <span
                className={styles.required}
                data-tooltip="Обязательное поле для заполнения"
              >
                *
              </span>
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Введите цену"
              className={styles.input}
            />
            {errors.price && (
              <span className={styles.error}>Обязательное поле для заполнения</span>
            )}
          </div>
        </div>



<div className={styles.row1}>
          <div className={styles.inputContainer1}>
            <label className={styles.label}>Начало тура</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="Дата начала тура"
                className={styles.input1}
              />

          </div>
          <div className={styles.inputContainer1}>
            <label className={styles.label}>
              Конец тура
            </label>
            <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              placeholder="Дата конца тура"
              className={styles.input1}
            />
          </div>
        </div>




        <div className={styles.row}>
          <div className={styles.textAreaContainer}>
            <label className={styles.label}>
              Описание
              <span
                className={styles.required}
                data-tooltip="Обязательное поле для заполнения"
              >
                *
              </span>
            </label>
            <textarea
              ref={descriptionRef}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Введите описание"
              className={styles.textArea}
            ></textarea>
            <div className={styles.charCount}>
              {formData.description.length}/{maxLengths.description}
            </div>
            {errors.description && (
              <span className={styles.error}>Обязательное поле для заполнения</span>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.attachContainer}>
            <label className={styles.attachLabel}>
              Прикрепить фото
              <span
                className={styles.required}
                data-tooltip="Обязательное поле для заполнения"
              >
                *
              </span>
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              className={styles.attachButton}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              📎
            </button>
          </div>
        </div>

        <ul className={styles.fileList}>
          {formData.photos.map((photo, index) => (
            <li key={index} className={styles.fileItem}>
              {photo.name}
              <button
                type="button"
                onClick={() => handleRemovePhoto(index)}
                className={styles.removePhotoButton}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>

        <button type="submit" className={styles.submitButton}>
          Добавить тур
        </button>
      </form>
    </section>
  );
};

export default AdminPageAddingTour;
