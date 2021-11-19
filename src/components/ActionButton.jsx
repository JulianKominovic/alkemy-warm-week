import React from "react";
import { Row, Button } from "react-bootstrap";
import VerificationModal from "./VerificationModal";

const ActionButton = ({
  actionName,
  callbackAction,
  show,
  handleClose,
  handleShow,
}) => {
  return (
    <Row className="mx-2 my-4">
      <VerificationModal
        variant="primary"
        show={show}
        handleClose={handleClose}
        title={actionName}
        callbackAction={callbackAction}
      />
      <Button variant="primary" onClick={handleShow}>
        {actionName}
      </Button>
    </Row>
  );
};

export default ActionButton;
