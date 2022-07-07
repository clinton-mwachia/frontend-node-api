import React, { useState } from "react";
import {
  CForm,
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCard,
  CCol,
  CRow,
  CContainer,
  CCardBody,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import Axios from "../Axios";

const Login = () => {
  let PERSON = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(PERSON);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _newuser = { ...user };
    _newuser[`${name}`] = val;

    setUser(_newuser);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    Axios.post("/user/login", user)
      .then((res) => {
        localStorage.setItem("firstname", res.data.firstname);
        localStorage.setItem("lastname", res.data.lastname);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("organisation", res.data.organisation);
      })
      .then(() => {
        setLoading(false);
        history.push("/todos");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="d-flex justify-content-center">
          <CCol md={4}>
            <CCard className="p-2">
              <CCardBody>
                <CForm onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>username</CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="username"
                      type="text"
                      value={user.username}
                      onChange={(e) => onInputChange(e, "username")}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>password</CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      value={user.password}
                      onChange={(e) => onInputChange(e, "password")}
                      required
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
                    <CCol xs={6} className="text-right">
                      <CButton color="link" className="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
