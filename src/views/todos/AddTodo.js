import React from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CFormLabel,
  CButton,
  CContainer,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";

const AddTodo = () => {
  let TODO = {
    creator: "",
    title: "",
    organisation: "",
    status: "",
    description: "",
    dateCreated: "",
    dateToComplete: "",
  };
  const [validated, setValidated] = React.useState(false);
  const [todo, setTodo] = React.useState(TODO);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(todo);
    setTodo(TODO);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _todo = { ...todo };
    _todo[`${name}`] = val;

    setTodo(_todo);
  };
  return (
    <CContainer className="bg-light">
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {/* START: to be removed after login has been implemented*/}
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="creator">Creator</CFormLabel>
          <CFormInput
            type="text"
            feedbackValid="Looks good!"
            id="validationTooltip01"
            placeholder="eg username"
            onChange={(e) => onInputChange(e, "creator")}
            value={todo.creator}
            required
            tooltipFeedback
          />
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="organisation">Organisation</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => onInputChange(e, "organisation")}
            placeholder="your organisation"
            feedbackValid="Looks good!"
            id="validationTooltip02"
            value={todo.organisation}
            required
            tooltipFeedback
          />
        </CCol>
        {/* END: to be removed after login has been implemented*/}
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="title">Title</CFormLabel>
          <CFormInput
            type="text"
            onChange={(e) => onInputChange(e, "title")}
            placeholder="eg. validation"
            value={todo.title}
            feedbackValid="Looks good!"
            id="validationTooltip02"
            required
            tooltipFeedback
          />
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="description">Description</CFormLabel>
          <CFormInput
            type="text"
            aria-describedby="validationTooltip03Feedback"
            onChange={(e) => onInputChange(e, "description")}
            feedbackInvalid="Please provide a valid description."
            id="validationTooltip03"
            placeholder="description"
            value={todo.description}
            required
            tooltipFeedback
          />
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="dateCreated">Start Date</CFormLabel>
          <CFormInput
            type="date"
            aria-describedby="validationTooltip05Feedback"
            feedbackInvalid="Please provide a valid date."
            onChange={(e) => onInputChange(e, "dateCreated")}
            id="validationTooltip05"
            placeholder="date created"
            value={todo.dateCreated}
            required
            tooltipFeedback
          />
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="dateToComplete">End Date</CFormLabel>
          <CFormInput
            type="date"
            aria-describedby="validationTooltip05Feedback"
            feedbackInvalid="Please provide a valid date."
            id="validationTooltip05"
            placeholder="date to complete"
            onChange={(e) => onInputChange(e, "dateToComplete")}
            value={todo.dateToComplete}
            required
            tooltipFeedback
          />
        </CCol>
        <CCol xs={12} className="position-relative">
          <CButton color="primary" type="submit">
            Submit form
          </CButton>
        </CCol>
      </CForm>{" "}
      <CRow>
        <CCol className="align-self-start"></CCol>
        <CCol className="align-items-center mb-3">
          <Link to="/todos" style={{ textDecoration: "none" }}>
            Back to Todos
          </Link>
        </CCol>
        <CCol className="align-self-end"></CCol>
      </CRow>
    </CContainer>
  );
};

export default AddTodo;
