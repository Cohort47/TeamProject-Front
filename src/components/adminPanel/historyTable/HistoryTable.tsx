import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../tableCss/Table.module.css";

interface Booking {
  id: number;
  user: { id: string };
  tour: { id: string };
  bookingDate: string;
  tourDate: string;
  amountOfPeople: number;
  state: string;
}

const HistoryTable: React.FC = () => {
  const token = localStorage.getItem("token");
  const [historyData, setHistoryData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("api/bookings/all",{
          headers: {
            Authorization: `Bearer ${token}`,
          }});
        setHistoryData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Ошибка при загрузке данных.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>История брони туров</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID User</th>
            <th>ID Тура</th>
            <th>Дата бронирования</th>
            <th>Дата тура</th>
            <th>Количество людей</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.user.id}</td>
              <td>{item.tour.id}</td>
              <td>{item.bookingDate}</td>
              <td>{item.tourDate}</td>
              <td>{item.amountOfPeople}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
