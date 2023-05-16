import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CreateTodo from "./components/CreateTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  const [todoArray, setTodoArray] = useState(["Hello, mom!", "Hi dad!"]);

  function addNewTodo(newTodo) {
    setTodoArray([...todoArray, newTodo]);
  }

  let greeting;
  const currDateTime = new Date();
  const currHrs = currDateTime.getHours();
  if (currHrs < 11) greeting = "Good Morning";
  else if (currHrs < 5) greeting = "Good Afternoon";
  else if (currHrs < 7) greeting = "Good Evening";
  else greeting = "Good Night";

  return (
    <div className="App">
      <Navbar />
      <h1 className="createtodo_greet">{greeting}, Amish!</h1>
      <CreateTodo addNewTodo={addNewTodo} todoArray={todoArray} />
      <p>Your Todos</p>
      <TodoList todoArray={todoArray} />
      <Footer />
    </div>
  );
}

export default App;
