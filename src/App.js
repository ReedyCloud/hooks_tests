import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";

import ItemList from "./components/ItemList";
import ItemCreator from "./components/ItemCreator";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        "https://portfolio-c5768.firebaseio.com/items.json"
      );
      const responseData = await response.json();

      const fetchedItems = [];

      for (const key in responseData) {
        fetchedItems.unshift({
          id: key,
          name: responseData[key].name,
          amount: responseData[key].amount,
        });
      }

      setItems(fetchedItems);
    };
    getItems();
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
      <Search />
      <ItemList items={items} />
    </div>
  );
};
export default App;
