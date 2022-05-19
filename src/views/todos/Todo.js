import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Axios from "../Axios";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`/todo/${id}`)
      .then((res) => setTodo(res.data))
      .catch((err) => alert(err));
  }, [id]);
  return (
    <div>
      <h4>Todo</h4>
      <Link to="/todos">Back To Todos</Link>
      <p>id: {todo._id}</p>
      <hr />
    </div>
  );
};

export default Todo;
