import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodoList } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="todoActionContainer">
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>

        <button
          onClick={() => {
            handleEditTodoList(index);
          }}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    </li>
  );
}
