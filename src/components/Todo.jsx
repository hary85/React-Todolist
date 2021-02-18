import React from "react";
import Proptypes from "prop-types";

const Todo = (Props) => {
  return (
    <div className="todo">
      <span className="todo-text">{Props.text}</span>
    </div>
  );
};

Todo.Proptypes = {
  text: Proptypes.string.isRequired
};
export default Todo;
