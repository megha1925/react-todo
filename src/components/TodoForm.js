import React, { useState } from "react";

const TodoForm = (props) => {
  //javascript code

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

  return (
    <form>
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
      <div>
        <select name="todos" className="filter-todo">
          <option value="all">ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="uncompleted">UNCOMPLETED</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
