import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTodosLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodosLocal = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  useEffect(() => {
    getTodosLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodosLocal();
  }, [todos, status]);

  return (
    <div className="ultra-container">
      <div className="container">
        <header>
          <h1>TODO LIST </h1>
        </header>
        <TodoForm
          setInputText={setInputText}
          setTodos={setTodos}
          inputText={inputText}
          todos={todos}
          setStatus={setStatus}
        />
        <TodoList
          todos1={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
};

export default App;
