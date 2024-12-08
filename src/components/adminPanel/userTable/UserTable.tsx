import React, { useState } from "react";
import styles from "./UserTable.module.css";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isBlocked: boolean;
};

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov1@mail.com",
      role: "ADMIN",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
    {
      id: 2,
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@mail.com",
      role: "USER",
      isBlocked: false,
    },
  ]);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = () => {
    if (editingUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id ? editingUser : user
        )
      );
      setEditingUser(null);
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof User
  ) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [field]: e.target.value });
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
    setIsModalOpen(false);
  };

  const toggleBlockUser = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  return (
    <div className={styles.userTable}>
      <h2 className={styles.title}>Пользователи</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Статус</th>
            <th>Действия</th>
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
              <td>{user.isBlocked ? "Заблокирован" : "Активен"}</td>
              <td>
              <div className={styles.actionButtons}>
                <button
                  onClick={() => handleEditUser(user)}
                  className={styles.editBtn}
                >
                  Изменить
                </button>
                <button
                  onClick={() => toggleBlockUser(user.id)}
                  className={styles.blockBtn}
                >
                  {user.isBlocked ? "Разблокировать" : "Заблокировать"}
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && editingUser && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Редактировать пользователя</h3>
            <label>
              Имя:
              <input
                type="text"
                value={editingUser.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
                className={styles.input}
              />
            </label>
            <label>
              Фамилия:
              <input
                type="text"
                value={editingUser.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
                className={styles.input}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={editingUser.email}
                onChange={(e) => handleInputChange(e, "email")}
                className={styles.input}
              />
            </label>
            <label>
              Роль:
              <select
                value={editingUser.role}
                onChange={(e) => handleInputChange(e, "role")}
                className={styles.select}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </label>
            <div className={styles.buttons}>
              <button onClick={handleSaveUser} className={styles.saveBtn}>
                Сохранить
              </button>
              <button onClick={handleCancel} className={styles.cancelBtn}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
