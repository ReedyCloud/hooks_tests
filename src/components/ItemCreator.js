import React, { useState } from "react";

import styles from "./ItemCreator.module.scss";

const ItemCreator = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  return (
    <div className={styles.ItemCreator}>
      <div className={styles.ItemName}>nazwa</div>
      <input
        className={styles.ItemField}
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <div className={styles.ItemName}>ilosc</div>
      <input
        className={styles.ItemField}
        type="number"
        value={itemAmount}
        onChange={(e) => setItemAmount(e.target.value)}
      />

      <button
        className={styles.ItemSubmit}
        onClick={() => addItem({ name: itemName, amount: itemAmount })}
      >
        dodaj :)
      </button>
    </div>
  );
};

export default ItemCreator;
