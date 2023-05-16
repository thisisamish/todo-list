import { useState } from "react";

const CreateTodo = ({ addNewTodo, todoArray }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="createtodo_container">
      <form
        className="createtodo_add"
        onSubmit={(e) => {
          addNewTodo(newTodo);
          setNewTodo("");
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          value={newTodo}
          className="createtodo_input"
          placeholder="Change the world!"
        />
        <button className="createtodo_addbtn">+</button>
      </form>
    </div>
  );
};

export default CreateTodo;
