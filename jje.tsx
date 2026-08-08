import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  } as React.CSSProperties,
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "16px",
  } as React.CSSProperties,
  inputRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  } as React.CSSProperties,
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  } as React.CSSProperties,
  button: {
    background: "#3b82f6",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  } as React.CSSProperties,
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  } as React.CSSProperties,
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    padding: "8px 0",
  } as React.CSSProperties,
  textDone: {
    textDecoration: "line-through",
    color: "#999",
    cursor: "pointer",
  } as React.CSSProperties,
  text: {
    cursor: "pointer",
  } as React.CSSProperties,
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#ef4444",
    cursor: "pointer",
    fontSize: "13px",
  } as React.CSSProperties,
  empty: {
    textAlign: "center",
    color: "#999",
    marginTop: "16px",
  } as React.CSSProperties,
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React basics", done: false },
    { id: 2, text: "Understand useState", done: false },
  ]);
  const [input, setInput] = useState<string>("");

  function addTodo() {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Todo List</h1>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
        />
        <button style={styles.button} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={todo.done ? styles.textDone : styles.text}
            >
              {todo.text}
            </span>
            <button style={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p style={styles.empty}>No tasks yet</p>}
    </div>
  );
}