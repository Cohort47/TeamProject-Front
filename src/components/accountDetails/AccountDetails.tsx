import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./AccountDetails.module.css";
import Loader from "../loader/Loader";
import axios from "axios";

interface AccountData {
  firstName: string;
  lastName: string;
  email: string;
  // phone: string;
  // birthDate: string;
  // nationality: string;
  // gender: string;
  // address: string;
}

const AccountDetails: React.FC = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState<AccountData | null>(null);
  const [editData, setEditData] = useState<AccountData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof AccountData, value: string) => {
    setEditData((prevData) =>
      prevData ? { ...prevData, [field]: value } : null
    );
  };

  useEffect(() => {
    const fetchAccountData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        setEditData(response.data);
      } catch (err: any) {
        console.error("Ошибка при загрузке данных:", err);
        setError(err.response?.data?.message || "Не удалось загрузить данные.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountData();
  }, [token]);

  const handleSave = async () => {
    if (!editData) return;

    setIsLoading(true);
    setError(null);

    try {
      await axios.put("/api/users", editData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(editData);
      setIsEditing(false);
    } catch (err: any) {
      console.error("Ошибка при сохранении данных:", err);
      setError(
        err.response?.data?.message || "Не удалось сохранить изменения."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditing(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>
      <table className={styles.table}>
        <tbody>
          {Object.entries(editData || {}).map(([key, value]) => {
            if (key === "id" || key === "role") return null;
            return (
              <tr key={key}>
                <th className={styles.th}>{getFieldName(key)}</th>
                <td className={styles.td}>
                  {isEditing ? (
                    <input
                      type="text"
                      className={styles.input}
                      value={value}
                      onChange={(e) =>
                        handleInputChange(
                          key as keyof AccountData,
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <span>{data?.[key as keyof AccountData]}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.buttonGroup}>
        {isEditing ? (
          <>
            <button className={styles.saveButton} onClick={handleSave}>
              Сохранить
            </button>
            <button className={styles.cancelButton} onClick={handleCancel}>
              Отмена
            </button>
          </>
        ) : (
          <div className={styles.buttons}>
            <RouterLink to="/account-management" className={styles.editButton}>
              Назад
            </RouterLink>
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              Изменить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const getFieldName = (key: string): string => {
  const fieldNames: { [key: string]: string } = {
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Email адрес",
  };
  return fieldNames[key] || key;
};

export default AccountDetails;
