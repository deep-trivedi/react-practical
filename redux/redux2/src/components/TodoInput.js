import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoAtom";

const TodoInput = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
