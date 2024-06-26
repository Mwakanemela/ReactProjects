import { React, useState } from "react";

export default function TodoInput(props) {
  const { handleAddedTodos, todoValue, setTodoValue } = props;
  // const [todoValue, setTodoValue] = useState('')
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="What do you want to do?..."
      />
      <button className= "addTodoBtn"
        onClick={() => {
          handleAddedTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
