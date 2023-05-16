import TodoItem from "./TodoItem";

const TodoList = ({ todoArray }) => {
  return (
    <div className="todolist_container">
      {todoArray.map((item, key) => (
        <TodoItem text={item} key={key} />
      ))}
    </div>
  );
};

export default TodoList;
