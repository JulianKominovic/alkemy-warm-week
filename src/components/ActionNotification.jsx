import React, { useEffect } from "react";
import { Toast } from "react-bootstrap";
const ActionNotification = ({ postAction, errorMessage, setShow, show }) => {
  useEffect(() => {}, [postAction, errorMessage]);
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      className="position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        zIndex: "99999",
      }}
    >
      <Toast.Header>
        <strong className="me-auto">
          {errorMessage ? "❌ Error" : "✅ Success"}
        </strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{ backgroundColor: "#fff" }}>
        {postAction ? `The post was ${postAction}d` : `Error: ${errorMessage}`}
      </Toast.Body>
    </Toast>
  );
};

export default ActionNotification;
