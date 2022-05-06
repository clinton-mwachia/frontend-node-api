import React from "react";
import {
  CButton,
  CContainer,
  CRow,
  CCard,
  CCardBody,
  CCol,
  CCardText,
  CCardTitle,
  CCardFooter,
} from "@coreui/react";
import { Link } from "react-router-dom";

import Axios from "../Axios";
import NoDataPage from "../pages/NoDataPage";

const Todos = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    Axios.get("/todo").then((res) => setTodos(res.data));
  }, []);
  console.log(todos);
  const data = [
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
    {
      Title: "Card title",
      Text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      Footer: "Last updated 3 mins ago",
    },
  ];

  return (
    <div>
      <Link to="/add/todo">
        <CButton>Add Todo</CButton>
      </Link>
      <hr />
      <CContainer>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {data.length > 0 ? (
            data.map((item) => (
              <CCol xs>
                <CCard className="h-100">
                  <CCardBody>
                    <CCardTitle>{item.Title}</CCardTitle>
                    <CCardText>{item.Text}</CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">
                      {item.Footer}
                    </small>
                  </CCardFooter>
                </CCard>
              </CCol>
            ))
          ) : (
            <NoDataPage />
          )}
        </CRow>
      </CContainer>
    </div>
  );
};

export default Todos;
