const styleSearch = {
  textAlign: "center",
  fontSize: "18px",
  borderRadius: "12px",
  border: "2px solid cornflowerblue",
  width: "95%",
  height: "32px",
};

function TodoSearch() {
  return <input style={styleSearch} placeholder="Cortar cebolla"></input>;
}

export { TodoSearch };
