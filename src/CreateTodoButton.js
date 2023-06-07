const styleButton = {
  fontSize: "28px",
  backgroundColor: "#ddfdf6",
  border: "solid darkslateblue",
  padding: "8px",
  borderRadius: "50%",
};

function CreateTodoButton() {
  return <button style={styleButton}>➕</button>;
}

export { CreateTodoButton };
