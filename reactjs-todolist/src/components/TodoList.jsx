import React from "react";

export default function TodoList() {
  let todos = [
      "Write code",
      "Do exercise",
      "Listen to music"
  ];
  
  return <ul>
    {todos.map((todo, index) =>{
         return ( <li key ={index}>{todo}</li>
        )
      }
      )
    }
  </ul>;
}
