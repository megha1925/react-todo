import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  // todos -> props.todos  every element
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => {
          return <Todo text={todo.text} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
