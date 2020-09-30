import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>TODO LIST </h1>
      </header>
      <TodoForm
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
      />
      <TodoList todos1={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
