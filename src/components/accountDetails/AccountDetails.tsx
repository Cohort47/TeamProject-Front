import React, { useState } from "react";
import styles from "./AccountManagement.module.css";

interface AccountData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  nationality: string;
  gender: string;
  address: string;
}

const AccountDetails: React.FC = () => {
  const [data, setData] = useState<AccountData>({
    name: "Алексей Самойлов",
    email: "a.samoylov@gmail.com",
    phone: "+49 635 234 33 33 33",
    birthDate: "24.07.1980",
    nationality: "Germany",
    gender: "Men",
    address: "Kieferpferde 36\n13645 Berlin\nGermany",
  });

  const [editData, setEditData] = useState<AccountData>(data);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: keyof AccountData, value: string) => {
    setEditData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>
      <table className={styles.table}>
        <tbody>
          {Object.entries(editData).map(([key, value]) => (
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
                  <span>{data[key as keyof AccountData]}</span>
                )}
              </td>
            </tr>
          ))}
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
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            Изменить
          </button>
        )}
      </div>
    </div>
  );
};

const getFieldName = (key: string): string => {
  const fieldNames: { [key: string]: string } = {
    name: "Имя",
    email: "Email адрес",
    phone: "Номер телефона",
    birthDate: "День рождения",
    nationality: "Национальность",
    gender: "Гендер",
    address: "Адрес",
  };
  return fieldNames[key] || key;
};

export default AccountDetails;
