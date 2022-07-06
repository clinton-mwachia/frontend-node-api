import React from "react";
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

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="d-flex justify-content-center">
          <CCol md={4}>
            <CCard className="p-2">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>username</CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>password</CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4">
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
