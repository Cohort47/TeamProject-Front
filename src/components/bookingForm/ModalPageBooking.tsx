import { useNavigate } from "react-router-dom";
import styles from "./ModalPageBooking.module.css";
import React from "react";

interface ModalPageBookingProps {
    message: string;
    onClose: () => void;
  }
  
  const ModalPageBooking: React.FC<ModalPageBookingProps> = ({ message, onClose }) => {



    
    return (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Успешное бронирование</h2>
            <p>{message}</p>
            <button className={styles.closeButton} onClick={onClose}>
              Вернутся к просмотрам туров
            </button>
          </div>
        </div>
      );
    };
  
  export default ModalPageBooking;