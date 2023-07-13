import React from "react";

function useLocalStorage(itemKey, initialValue) {
  const itemNames = {
    todos: "TODOS-SAVE_V1",
  };
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localItem = localStorage.getItem(itemNames[itemKey]);

        let parsedItem;

        if (!localItem) {
          localStorage.setItem(itemNames[itemKey], JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemNames[itemKey]));
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (thisError) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemNames[itemKey], JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
