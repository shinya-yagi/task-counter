import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodosContext";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Container>
        <Counter />
      </Container>
      <Container>
        <h1 className="mt-4">タスクリスト</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
