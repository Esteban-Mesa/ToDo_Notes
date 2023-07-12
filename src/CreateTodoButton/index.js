import "./createTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="createTodo"
      onClick={(event) => {
        click(event);
      }}
    >
      ➕
    </button>
  );
}

function click(thisEvent) {
  console.log(
    `evento: ${thisEvent}
    target: ${thisEvent.target}`,
  );
  console.log(thisEvent);
}

export { CreateTodoButton };
