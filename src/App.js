import React, { useState, useCallback } from "react";

import styles from "./App.module.scss";

import ItemList from "./components/ItemList";
import ItemCreator from "./components/ItemCreator";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);

  const handleFilteredItems = useCallback((filteredItems) => {
    setItems(filteredItems);
  }, []);

  const handleAddItem = async (item) => {
    const postItem = await fetch(
      "https://portfolio-c5768.firebaseio.com/items.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const itemID = await postItem.json();
    setItems((prevItems) => [{ id: itemID.name, ...item }, ...prevItems]);
  };

  return (
    <div className={styles.App}>
      <ItemCreator addItem={handleAddItem} />
      <Search onLoadItems={handleFilteredItems} />
      <ItemList items={items} />
    </div>
  );
};
export default App;
