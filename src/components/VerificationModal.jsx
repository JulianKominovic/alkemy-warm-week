import React from "react";
import { Button, Modal } from "react-bootstrap";
const VerificationModal = ({
  callbackAction,
  title,
  variant,
  handleClose,
  show,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to {title}. There's no comeback if you decide to
        proceed.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant={variant}
          onClick={() => {
            callbackAction();
            handleClose();
          }}
        >
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerificationModal;
