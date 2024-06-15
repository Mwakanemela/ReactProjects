import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodoList } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="todoActionContainer">
        <button className="btn"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>

        <button className="btn"
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
