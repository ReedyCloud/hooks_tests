import React from "react";

import styles from "./ItemList.module.scss";

const ItemList = ({ items }) => {
  return (
    <ul className={styles.ItemList}>
      {items.length !== 0 &&
        items.map(({ name, amount, id }) => (
          <li className={styles.Item} key={id}>
            {name}, {amount}
          </li>
        ))}
    </ul>
  );
};

export default ItemList;

ItemList.defaultProps = {
  items: [],
};
