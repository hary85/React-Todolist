import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar Props Di React!"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State Di React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar Props Di React!"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State Di React"
    },
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
