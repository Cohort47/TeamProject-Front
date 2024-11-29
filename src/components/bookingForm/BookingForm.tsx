import React, { useState } from "react";
import styles from "./BookingForm.module.css";

type Room = {
  id: number;
  type: string;
  description: string;
  guests: number;
  price: number;
  initialQuantity: number;
};

const BookingForm: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      type: "Двухместный номер",
      description:
        "Наш уютный двухместный номер предлагает просторную двуспальную кровать, современный интерьер и все необходимые удобства для комфортного отдыха. Гостям предоставляются бесплатный wi-fi, телевизор с плоским экраном и кондиционер. Идеальный выбор для романтического отпуска или деловой поездки.",
      guests: 2,
      price: 88,
      initialQuantity: 1,
    },
    {
      id: 2,
      type: "Одноместный номер",
      description:
        "Одноместный номер - это комфорт и приватность для индивидуальных путешественников. В номере предусмотрены удобная односпальная кровать, рабочий стол, бесплатный wi-fi и телевизор. идеально подходит для деловых поездок и краткосрочного отдыха.",
      guests: 1,
      price: 68,
      initialQuantity: 1,
    },
  ]);

  const getRoomDeclension = (quantity: number) => {
    const lastDigit = quantity % 10;
    const lastTwoDigits = quantity % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "номеров";
    }
    if (lastDigit === 1) {
      return "номер";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "номера";
    }
    return "номеров";
  };

  const updateRoomQuantity = (id: number, quantity: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, initialQuantity: quantity } : room
      )
    );
  };

  const totalPrice = rooms.reduce(
    (sum, room) => sum + room.price * room.initialQuantity,
    0
  );

  const totalRooms = rooms.reduce((sum, room) => sum + room.initialQuantity, 0);

  return (
    <div className={styles.container}>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th>Тип размещения</th>
            <th>Число гостей</th>
            <th>Сегодняшняя цена</th>
            <th>Количество номеров</th>
            <th>Итоговая цена</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>
                <strong>{room.type}</strong>
                <p className={styles.description}>{room.description}</p>
              </td>
              <td>{room.guests}</td>
              <td>{room.price}$</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={room.initialQuantity}
                  onChange={(e) =>
                    updateRoomQuantity(room.id, parseInt(e.target.value) || 0)
                  }
                />
              </td>
              <td>{room.price * room.initialQuantity}$</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.summary}>
        <p className={styles.totalSummary}>
          {totalRooms} {getRoomDeclension(totalRooms)} за {totalPrice}$, включая
          налоги и сборы
        </p>
        <button className={styles.bookNow}>Я бронирую</button>
      </div>
    </div>
  );
};

export default BookingForm;
