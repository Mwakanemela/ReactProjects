import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
function App() {
  // let todos = [];

  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  function handleAddedTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, i) => i !== index);
    setTodos(newTodoList);
  }

  function handleEditTodoList(index) {
    const todoTobeEdited = todos[index];
    setTodoValue(todoTobeEdited);
    handleDeleteTodo(index);
  }
  // const editTodoList = (index) => {
  //   const todoTobeEdited = todos[index];
  //   setTodoValue(todoTobeEdited);
  //   handleDeleteTodo(index);
  // };
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddedTodos={handleAddedTodos}
      />
      <TodoList
        handleEditTodoList={handleEditTodoList}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
