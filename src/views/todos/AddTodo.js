import React from "react";
import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <div>
      AddTodo <Link to="/todos">Back to Todos</Link>
    </div>
  );
};

export default AddTodo;
