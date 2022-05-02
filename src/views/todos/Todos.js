import React from "react";
import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";

import Axios from "../Axios";

const Todos = () => {
  Axios.get("/todo").then((res) => res.data);
  return (
    <div>
      <Link to="/add/todo">
        <CButton>Add Todo</CButton>
      </Link>
      <hr />
      my todos
    </div>
  );
};

export default Todos;
