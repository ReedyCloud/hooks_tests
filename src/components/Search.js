import React, { useState, useEffect } from "react";

import styles from "./Search.module.scss";

const Search = ({ onLoadItems }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const query =
      filter.length === 0 ? "" : `?orderBy="name"&equalTo="${filter}"`;
    const getItems = async () => {
      const response = await fetch(
        "https://portfolio-c5768.firebaseio.com/items.json" + query
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
      onLoadItems(fetchedItems);
    };
    getItems();
  }, [filter, onLoadItems]);

  return (
    <div className={styles.Search}>
      <label>filter by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Search;
