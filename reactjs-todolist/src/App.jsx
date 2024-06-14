import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  return (
    // Making them main tags coz its main section of the app
    <main>
      <TodoInput />
      <TodoList />
    </main>
  );
}

export default App;
