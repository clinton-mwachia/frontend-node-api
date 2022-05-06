import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";

const NoDataPage = () => {
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9} sm={4}>
          <span>
            <h4 className="pt-3">No Data Items!</h4>
          </span>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default NoDataPage;
