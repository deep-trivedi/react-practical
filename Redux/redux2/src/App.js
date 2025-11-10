import React from "react";
import { RecoilRoot } from "recoil";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="app-container">
        <h1>Recoil Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
