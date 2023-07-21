"use client";

import { useState } from "react";
import AddTodo from "../components/AddTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);

  const addTodo = (newTodo) => {
    setIndex(() => index + 1);
    setTodos([...todos, { id: index, content: newTodo }]);
  };

  const deleteTodo = (id) => {
    const oldTodos = [...todos];
    oldTodos.splice(id, 1);
    setTodos(oldTodos);
  };

  return (
    <div>
      <h1>nextjs testing tutorial</h1>
      <AddTodo addClick={addTodo} />
      <div data-testid="todoList">
        {todos.map((todo) => {
          return (
            <ul key={todo.id}>
              <li>
                {todo.id}: {todo.content}
              </li>
              <button
                data-testid={`deleteTodoButton-${todo.id}`}
                onClick={() => deleteTodo(todo.id)}
              >
                del
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
