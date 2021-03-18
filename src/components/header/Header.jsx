import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddTogle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddTogle} />
      <h1 className={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddTogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
