import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index } = props;
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

        <button>
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    </li>
  );
}
