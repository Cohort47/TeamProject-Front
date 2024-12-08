import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import UserTable from "../userTable/UserTable";
import ToursCatalog from "../toursCatalog/ToursCatalog";
import HistoryTable from "../historyTable/HistoryTable";
import TransactionTable from "../transactionTable/TransactionTable";
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
        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
