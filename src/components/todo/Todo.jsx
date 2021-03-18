import React from "react";
import Proptypes from "prop-types";

import styles from "./todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <span
        className={styles.todoText}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.Proptypes = {
  text: Proptypes.string.isRequired,
  completeTodo: Proptypes.func.isRequired,
  index: Proptypes.number.isRequired,
  isCompleted: Proptypes.bool.isRequired
};
export default Todo;
