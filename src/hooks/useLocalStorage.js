import React from "react";

function useLocalStorage(itemKey, initialValue) {
  const itemNames = {
    todos: "TODOS-SAVE_V1",
  };

  const localItem = localStorage.getItem(itemNames[itemKey]);

  let parsedItem;

  if (!localItem) {
    localStorage.setItem(itemNames[itemKey], JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemNames[itemKey]));
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemNames[itemKey], JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
