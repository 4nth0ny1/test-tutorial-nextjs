"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const addTodo = (newTodo) => {
    setIndex(() => index + 1);
    setTodos([...todos, { id: index, content: newTodo }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const oldTodos = [...todos];
    oldTodos.splice(id, 1);
    setTodos(oldTodos);
  };

  return (
    <div>
      <h1>nextjs testing tutorial</h1>
      <div>
        <input
          data-testid="todoInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="addTodoButton" onClick={() => addTodo(input)}>
          add todo
        </button>
      </div>
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
