import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiFillDelete, AiFillInfoCircle, AiFillEdit } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { removePost } from "../services/postsApi";
import ActionNotification from "./ActionNotification";
import VerificationModal from "./VerificationModal";

const PostActionButtons = ({ id }) => {
  const {
    location: { pathname },
  } = useHistory();
  // CHECK IF CURRENT LOCATION IS ON /INFO/any-id
  const isInInfoLocation = pathname === `/info/${id}`;
  // CHECK IF CURRENT LOCATION IS ON /EDIT/any-id
  const isInEditLocation = pathname === `/edit/${id}`;
  //CHECKS IF THE CURRENT LOCATION IS /CREATE
  const isInCreateLocation = pathname === `/create`;

  // MODAL STATE
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // NOTIFICATION STATES
  const [showNotification, setShowNotification] = useState(false);
  const [actionName, setActionName] = useState("");
  const [error, setError] = useState("");
  const handleShowNotification = () => setShowNotification(true);

  return (
    <Row className="my-3">
      <Col>
        <Link
          to={`/info/${id}`}
          className={
            isInInfoLocation || isInEditLocation || isInCreateLocation
              ? "disabled-link"
              : undefined
          }
        >
          <Button variant="outline-secondary" className="w-100">
            <AiFillInfoCircle />
          </Button>
        </Link>
      </Col>

      <Col>
        <Link
          to={`/edit/${id}`}
          className={
            isInEditLocation || isInCreateLocation ? "disabled-link" : undefined
          }
        >
          <Button variant="outline-info" className="w-100">
            <AiFillEdit></AiFillEdit>
          </Button>
        </Link>
      </Col>

      <Col>
        <VerificationModal
          callbackAction={() =>
            removePost(id)
              .then((res) => {
                setError("");
                setActionName("Remove");
                handleShowNotification();
              })
              .catch((err) => {
                setError(err);
                setActionName("");
                handleShowNotification();
              })
          }
          title="Delete"
          show={show}
          handleClose={handleClose}
          variant="danger"
        />
        <ActionNotification
          show={showNotification}
          setShow={setShowNotification}
          postAction={actionName}
          errorMessage={error}
        />
        <Button
          variant="outline-danger"
          onClick={handleShow}
          className={`w-100 ${
            isInEditLocation || isInCreateLocation ? "disabled-link" : undefined
          }`}
        >
          <AiFillDelete />
        </Button>
      </Col>
    </Row>
  );
};

export default PostActionButtons;
