import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TODO LIST </h1>
      </header>
      <TodoForm
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
