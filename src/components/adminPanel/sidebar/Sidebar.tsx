import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  const menuItems = [
    { name: "Пользователи", tab: "users" },
    { name: "Каталог туров", tab: "toursCatalog" },
    { name: "Транзакции туров", tab: "transactionsTours" },
    { name: "История брони туров", tab: "historyTours" },
  ];

  return (
    <div className={styles.sidebar}>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={styles.menuItem}
            onClick={() => setActiveTab(item.tab)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
