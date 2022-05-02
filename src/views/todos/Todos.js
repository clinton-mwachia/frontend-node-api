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

const Todos = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    Axios.get("/todo").then((res) => setTodos(res.data));
  }, []);
  console.log(todos);
  return (
    <div>
      <Link to="/add/todo">
        <CButton>Add Todo</CButton>
      </Link>
      <hr />
      <CContainer>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          <CCol xs>
            <CCard className="h-100">
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  Last updated 3 mins ago
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Todos;
