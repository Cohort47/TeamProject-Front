import React, { useState } from "react";
import styles from "./UserTable.module.css";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const initialUsers: User[] = [
  { id: "001", firstName: "Иван", lastName: "Петров", email: "ivanov2020@gmail.com", role: "ADMIN" },
  { id: "002", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "003", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "004", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "005", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "006", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "007", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "008", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "009", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "010", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "011", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "012", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "013", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "014", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
  { id: "015", firstName: "Иван", lastName: "Иванов", email: "ivanov2021@gmail.com", role: "USER" },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleEdit = (id: string) => {
    const newRole = prompt("Введите новую роль (USER/ADMIN):", "USER");
    if (newRole) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, role: newRole.toUpperCase() } : user
        )
      );
    }
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className={styles.editBtn} onClick={() => handleEdit(user.id)}>
                  Изменить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
