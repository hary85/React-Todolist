/**@jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import React from "react";
import PropTypes from "prop-types";

//import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleformSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("no Blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleformSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
