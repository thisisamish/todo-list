import TodoItem from "./TodoItem";

const TodoList = ({ todoArray }) => {
  return (
    <div className="todolist_container">
      {todoArray.map((item) => (
        <TodoItem text={item} />
      ))}
    </div>
  );
};

export default TodoList;
