import React from "react";
import { CButton } from "@coreui/react";

import Axios from "./Axios";

const Todos = () => {
  Axios.get("/todo").then((res) => res.data);
  return (
    <div>
      <CButton onClick={() => alert("add todo")}>add Todo</CButton>
      <hr />
      my todos
    </div>
  );
};

export default Todos;
