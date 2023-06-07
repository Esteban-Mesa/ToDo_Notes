const styleList = {
  width: "100%",
  margin: "0px",
  padding: "0px",
};

function TodoList(props) {
  return <ul style={styleList}>{props.children}</ul>;
}

export { TodoList };
