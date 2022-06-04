import React from "react";
import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CForm,
  CFormInput,
  CButton,
  CCol,
} from "@coreui/react";

const Header = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand>
          <h5>Projects APP</h5>
        </CHeaderBrand>
        <CCol lg={4} sm={7}>
          <CForm className="d-flex">
            <CFormInput
              className="me-2"
              type="search"
              placeholder="Search todos"
            />
            <CButton
              type="submit"
              color="success"
              variant="outline"
              onClick={(e) => alert("search")}
            >
              Search
            </CButton>
          </CForm>
        </CCol>
        <CCol lg={3}>
          <CHeaderNav>
            <CNavItem>
              <CNavLink component={NavLink} to="/todos">
                My Projects
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink component={NavLink} to="/profile">
                profile
              </CNavLink>
            </CNavItem>
            <CButton
              color="link"
              style={{ textDecoration: "none" }}
              onClick={(e) => {
                alert("Logged out");
              }}
            >
              log out
            </CButton>
          </CHeaderNav>
        </CCol>
      </CContainer>
    </CHeader>
  );
};

export default Header;
