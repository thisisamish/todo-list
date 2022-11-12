const TodoItem = ({ text }) => {
  return (
    <div className="todoitem_container">
      <input type="checkbox" name="" id="" className="todoitem_checkbox" />
      <label htmlFor="" className="todoitem_text">
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
