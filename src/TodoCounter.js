const styleCounter = {
  textAlign: "center",
  paddingBottom: "12px",
  borderBottom: "4px solid dodgerblue",
};

function TodoCounter({ total, completed }) {
  return (
    <h1 style={styleCounter}>
      Has compltetado <strong>{completed}</strong> de <strong>{total}</strong> TODOS
    </h1>
  );
}

export { TodoCounter };
