const TodoItem = ({ text }) => {
  const handleChange = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };
  return (
    <div className="todoitem_container">
      <input
        type="checkbox"
        className="todoitem_checkbox"
        onChange={handleChange}
      />
      <label className="todoitem_text">{text}</label>
    </div>
  );
};

export default TodoItem;
