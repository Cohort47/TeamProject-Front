import React from "react";
import styles from "./Table.module.css";

const HistoryTable: React.FC = () => {
  const historyData = [
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
    { id: "001", userId: "11123", typeId: "ER123", status: "VALID" },
  ];

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID User</th>
            <th>ID Тура</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.typeId}</td>
              <td>{item.status}</td>
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

export default HistoryTable;
