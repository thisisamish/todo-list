const CreateTodo = () => {
  return (
    <div className="createtodo_container">
      <h1 className="createtodo_greet">What's up, Amish!</h1>
      <div className="createtodo_add">
        <input
          type="text"
          name=""
          id=""
          className="createtodo_input"
          placeholder="Change the world!"
        />
        <button className="createtodo_addbtn">+</button>
      </div>
    </div>
  );
};

export default CreateTodo;
