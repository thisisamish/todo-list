import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CreateTodo from "./components/CreateTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  const [todoArray, setTodoArray] = useState(["Hello, mom!", "Hi dad!"]);

  useEffect(() => {}, [todoArray]);
  return (
    <div className="App">
      <Navbar />
      <CreateTodo />
      <p>Your Todos</p>
      <TodoList todoArray={todoArray} />
      <Footer />
    </div>
  );
}

export default App;
