import React from "react";
import Todo from "../Todo/Todo";

import "../TodoList/TodoList.css";

const TodoList = (props) => {
  // todos -> props.todos  every element
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              uid={todo.id}
              completed={todo.completed}
              todoSet={props.setTodos}
              todos2={props.todos1}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
