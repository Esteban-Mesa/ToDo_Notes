const styleItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "600",
  fontSize: "16px",
  backgroundColor: "#ddfdf6",
  border: "2px solid cadetblue",
  borderRadius: "16px",
  padding: "8px",
  margin: "12px",
};

const styleButtonsContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const styleButton = {
  backgroundColor: "rgb(193 191 255)",
  padding: "6px",
  borderRadius: "50%",
  margin: "6px",
};

function TodoItem() {
  return (
    <li style={styleItem}>
      <p>Llorar con la Llorona</p>
      <div style={styleButtonsContainer}>
        <samp style={styleButton}>✔️</samp>
        <samp style={styleButton}>❌</samp>
      </div>
    </li>
  );
}

export { TodoItem };
