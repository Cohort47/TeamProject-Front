import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";
import ToursCatalog from "./ToursCatalog";
import HistoryTable from "./HistoryTable";
import TransactionTable from "./TransactionTable";
import styles from "./AdminPanel.module.css";

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("users");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UserTable />;
      case "historyTours":
        return <HistoryTable />;
      case "transactionsTours":
        return <TransactionTable />;
        case "toursCatalog":
            return <ToursCatalog />;
      default:
        return <UserTable />;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Панель администратора</h1>
      <div className={styles.panel}>
        <Sidebar setActiveTab={setActiveTab} />
        <div className={styles.content}>
          {renderContent()}
          <div className={styles.actions}>
            <button className={styles.blockBtn}>Заблокировать</button>
            <button className={styles.saveBtn}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
