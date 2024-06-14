import React from "react";
import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {

  const {todos} = props
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          // <li className="todoItem" key={index}>
          //   {todo}
          //   <i class="fa-solid fa-pen"> </i>
          // </li>
          <TodoCard {...props} index = {index} key={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
