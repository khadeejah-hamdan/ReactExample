import React, { useState, useEffect, Fragment } from "react";

import ListItem from "./ListItem";
import Form from "./Form";

const tasks = [
  { name: "task 1", done: false },
  { name: "task 2", done: false },
  { name: "task 3", done: true },
];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let count = 0;
    todos.map((todo) => (!todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");
    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  const handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };

  return (
    <Fragment>
      <Form
        onSubmit={handleSubmit}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul
        className="todo-container"
        style={{
          gap: "15px",
          listStyleType: "none",
        }}
      >
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            remove={() => handleBntClick({ type: "remove", index })}
            completed={() => handleBntClick({ type: "completed", index })}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default TodoApp;
