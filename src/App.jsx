import "./App.css";
import TodoList from "./pages/TodoList";
import Counter from "./pages/Counter";
// import EditTodo from "./pages/EditTodo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        {/* <Route path="/:id" element={<EditTodo />}></Route> */}
        {/* <TodoList /> */}
        {/* <Counter /> */}
        {/* счетчик не будет работать потому что мы отвязали его редьсер от стора */}
      </Routes>
    </>
  );
}

export default App;
