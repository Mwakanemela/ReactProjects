import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState, useEffect } from "react";
function App() {
  // let todos = [];

  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  function persistenceData(newTodo) {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodo }));
  }
  function handleAddedTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistenceData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, i) => i !== index);
      persistenceData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodoList(index) {
    const todoTobeEdited = todos[index];
    setTodoValue(todoTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    // if local storage does not exists
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");

    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
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
