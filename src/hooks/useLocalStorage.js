import React from "react";
/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: true },
  { text: "LALALALALA", completed: false },
  { text: "Usar estados derivados", completed: true },
  { text: "Canción para la vida", completed: false },
];

localStorage.setItem("TODOS-SAVE_V1", JSON.stringify(defaultTodos));

localStorage.removeItem("TODOS-SAVE_V1");
 */
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
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemNames[itemKey], JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
