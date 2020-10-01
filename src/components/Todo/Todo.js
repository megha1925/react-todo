import React from "react";
import "../Todo/Todo.css";

const Todo = (props) => {
  const deleteHandler = () => {
    props.todoSet(props.todos2.filter((el) => el.id !== props.uid));
  };

  const completeHandler = () => {
    props.todoSet(
      props.todos2.map((el) => {
        if (el.id === props.uid) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${props.completed ? "completed" : ""}`}>
          {props.text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <div className="seperator"></div>
    </div>
  );
};

export default Todo;
