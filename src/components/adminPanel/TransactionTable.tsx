import React from "react";
import styles from "./Table.module.css";

const TransactionTable: React.FC = () => {
  const transactionData = [
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
    {
      id: "001",
      bookingId: "ER123",
      amount: "123.00",
      paymentMethod: "Карта",
      status: "Бронь",
      paymentDate: "20.11.2024",
      totalPrice: "246",
    },
  ];

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Брони</th>
            <th>Сумма</th>
            <th>Способ оплаты</th>
            <th>Статус</th>
            <th>Дата платежа</th>
            <th>Общая цена</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.bookingId}</td>
              <td>{item.amount}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.status}</td>
              <td>{item.paymentDate}</td>
              <td>{item.totalPrice}</td>
              <td>
                <button className={styles.editBtn}>Изменить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
