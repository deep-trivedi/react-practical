import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoAtom";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="todo-list">
      {todos.length === 0 && <p>No tasks yet. Add one!</p>}
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
