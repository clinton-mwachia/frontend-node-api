import React from "react";
import {
  CButton,
  CContainer,
  CRow,
  CCard,
  CCol,
  CListGroup,
  CListGroupItem,
  CCardHeader,
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

  return (
    <div>
      <div>
      <Link to="/add/todo">
        <CButton>Add Todo</CButton>
      </Link>
      </div>
      <hr />
      <CContainer>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {todos.length > 0 ? (
            todos.map((item) => (
              <CCol key={item.id} xs>
                <CCard className="h-100 border-dark">
                  <CCardHeader>
                    Title: <b style={{ color: "darkblue" }}>{item.title}</b>
                  </CCardHeader>
                  <CListGroup flush>
                    <CListGroupItem>
                      <b>Description: </b>
                      {item.description}
                    </CListGroupItem>
                    <CListGroupItem>
                      <b>Date Created: </b>
                      {item.dateCreated}
                    </CListGroupItem>
                    <CListGroupItem>
                      <b>Completion Date: </b>
                      {item.dateToComplete}
                    </CListGroupItem>
                    <CListGroupItem>
                      <b>Creator: </b>
                      {item.creator}
                    </CListGroupItem>
                    <CListGroupItem>
                      <b>Organisation: </b>
                      {item.organisation}
                    </CListGroupItem>
                    <CListGroupItem>
                      <b>Status: </b>
                      {item.status}
                    </CListGroupItem>
                  </CListGroup>
                  <CCardFooter className="text-medium-emphasis">
                    <small>
                      <Link to="/todo/id">More</Link>
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
