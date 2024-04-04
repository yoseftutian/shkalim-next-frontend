"use client";
import { Add, Delete } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const titleRef = useRef(null);
  function addTodo() {
    setTodos((prev) => [
      ...prev,
      {
        id: nanoid(),
        title: titleRef.current.value,
        finished: false,
        date: new Date(),
      },
    ]);
    titleRef.current.value = "";
  }
  return (
    <div className="column center" style={{ height: "85vh" }}>
      <div className="row" style={{ width: "400px", gap: "20px" }}>
        <TextField inputRef={titleRef} />
        <IconButton onClick={addTodo}>
          <Add />
        </IconButton>
      </div>
      <table style={{ width: "400px" }}>
        {todos.map((todo) => (
          <TodoItem key={nanoid()} todo={todo} setTodos={setTodos} />
        ))}
      </table>
    </div>
  );
}

function TodoItem({ todo, setTodos }) {
  return (
    <tr
      style={{
        width: "100%",
      }}
    >
      <td>
        <h2>{todo.title}</h2>
      </td>

      <td>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => {
            setTodos((prev) =>
              prev.map((p) => {
                if (p.id === todo.id) return { ...p, finished: !p.finished };
                return p;
              })
            );
          }}
        />
      </td>
      <td>
        <IconButton
          onClick={() =>
            setTodos((prev) => prev.filter((p) => p.id !== todo.id))
          }
        >
          <Delete />
        </IconButton>
      </td>
      <td>
        <p>{todo.date.toString()}</p>
      </td>
    </tr>
  );
}
