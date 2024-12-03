import React from "react";
import styles from "../tableCss/Table.module.css";

const HistoryTable: React.FC = () => {
  const historyData = [
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "AVAILABLE"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "BOOKED"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "PAID"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "CANCELLED"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "BOOKED"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "BOOKED"},
    { id: "001", userId: "11123", typeId: "ER123", startDate: "2024-11-01", endDate: "2024-11-9", status: "BOOKED"},
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>История брони туров</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID User</th>
            <th>ID Тура</th>
            <th>Начальная дата</th>
            <th>Конечная дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.typeId}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
