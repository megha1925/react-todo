import React from "react";
import "../TodoForm/TodoForm.css";

const TodoForm = (props) => {
  const inputHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        id: Math.random() * 1000,
        completed: false,
      },
    ]);

    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <div className="flexbox-container">
      <form className="todo-group">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a work"
          name="text"
          value={props.inputText}
          onChange={inputHandler}
        />

        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fa fa-plus-square"></i>
        </button>

        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
};

export default TodoForm;
