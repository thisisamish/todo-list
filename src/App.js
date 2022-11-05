import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();
  const [todoArray, setTodoArray] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    setTodoArray(prevValue => [...prevValue, inputText]);
    setInputText("");
  }

  return (
    <div className="App">
      <h1>Amish's Todo List</h1>
      <div className="add-task">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className="tasks-list">
        <ul>
          <li>{todoArray.map(todoItem => <li>{todoItem}</li>)}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
