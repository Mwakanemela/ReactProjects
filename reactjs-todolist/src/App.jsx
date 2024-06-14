import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";
function App() {
  // let todos = [];

  const [todos, setTodos] = useState([
    "Write code",
    "Do exercise",
    "Listen to music",
  ]);

  function handleAddedTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, i) => i !== index);
    setTodos(newTodoList);
  }

  const editTodoList = (index, newTodo) => {
    const newTodoList = [...todos];
    newTodoList[index] = newTodo;
    setTodos(newTodoList);
  }
  return (
    <>
      <TodoInput handleAddedTodos={handleAddedTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
