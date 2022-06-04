import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SpeedDial } from "primereact/speeddial";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { CForm, CFormInput, CCol, CFormLabel, CContainer } from "@coreui/react";
import { useHistory } from "react-router-dom";

import Axios from "../Axios";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [deleteHouseDialog, setDeleteHouseDialog] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Axios.get(`/todo/${id}`)
      .then((res) => setTodo(res.data))
      .catch((err) => alert(err));
  }, [id]);

  const hideDeleteHouseDialog = () => {
    setDeleteHouseDialog(false);
  };

  const deleteHouse = () => {
    Axios.delete(`/todo/${id}`)
      .then((res) => {
        alert(res.data.message);
        setDeleteHouseDialog(false);
        history.push("/todo");
      })
      .catch((err) => console.log(err));
  };

  const deleteHouseDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteHouseDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteHouse}
      />
    </React.Fragment>
  );
  const items = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        alert("add");
      },
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        alert("update");
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        setDeleteHouseDialog(true);
      },
    },
  ];
  return (
    <div>
      <h4>Todo</h4>
      <Link to="/todos">Back To Todos</Link>
      <hr />
      <CContainer className="bg-light border rounded">
        <CForm className="row g-3 needs-validation" noValidate>
          {/* START: to be removed after login has been implemented*/}
          <CCol md={4} className="position-relative">
            <CFormLabel htmlFor="creator">Creator</CFormLabel>
            <CFormInput
              type="text"
              feedbackValid="Looks good!"
              id="validationTooltip01"
              placeholder="eg username"
              value={todo.creator}
              required
              tooltipFeedback
              readOnly
            />
          </CCol>
          <CCol md={4} className="position-relative">
            <CFormLabel htmlFor="organisation">Organisation</CFormLabel>
            <CFormInput
              type="text"
              placeholder="your organisation"
              feedbackValid="Looks good!"
              id="validationTooltip02"
              value={todo.organisation}
              required
              tooltipFeedback
              readOnly
            />
          </CCol>
          {/* END: to be removed after login has been implemented*/}
          <CCol md={4} className="position-relative">
            <CFormLabel htmlFor="title">Title</CFormLabel>
            <CFormInput
              type="text"
              placeholder="eg. validation"
              value={todo.title}
              feedbackValid="Looks good!"
              id="validationTooltip02"
              required
              tooltipFeedback
              readOnly
            />
          </CCol>
          <CCol md={4} className="position-relative">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormInput
              type="text"
              aria-describedby="validationTooltip03Feedback"
              feedbackInvalid="Please provide a valid description."
              id="validationTooltip03"
              placeholder="description"
              value={todo.description}
              required
              tooltipFeedback
              readOnly
            />
          </CCol>
          <CCol md={4} className="position-relative">
            <CFormLabel htmlFor="dateCreated">Start Date</CFormLabel>
            <CFormInput
              type="date"
              aria-describedby="validationTooltip05Feedback"
              feedbackInvalid="Please provide a valid date."
              id="validationTooltip05"
              placeholder="date created"
              value={todo.dateCreated}
              required
              tooltipFeedback
              readOnly
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
              value={todo.dateToComplete}
              required
              tooltipFeedback
              readOnly
            />
          </CCol>
          <CCol xs={12} className="position-relative mb-3">
            <SpeedDial
              model={items}
              radius={80}
              direction="right"
              type="semi-circle"
            />
          </CCol>
        </CForm>
      </CContainer>
      <Dialog
        visible={deleteHouseDialog}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={deleteHouseDialogFooter}
        onHide={hideDeleteHouseDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {todo && (
            <span>
              Are you sure you want to delete project <b>{todo.title}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default Todo;
