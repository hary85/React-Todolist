/**@jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

//import React from "react";
import Proptypes from "prop-types";

//import styles from "./todo.module.css";
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo({ theme })} onClick={() => completeTodo(index)}>
      <span css={styles.todoText({ theme, isCompleted })}>{text}</span>
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
