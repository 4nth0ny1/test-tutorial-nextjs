import { useState } from "react";

export default function AddTodo({ addClick }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        data-testid="todoInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="addTodoButton" onClick={() => addClick(input)}>
        add todo
      </button>
    </div>
  );
}
