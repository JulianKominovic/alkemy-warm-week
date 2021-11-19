import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiFillDelete, AiFillInfoCircle, AiFillEdit } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { removePost } from "../services/postsApi";
import ActionNotification from "./ActionNotification";
import VerificationModal from "./VerificationModal";
import useModal from "../hooks/useModal";
import useNotificationStatus from "../hooks/useNotificationStatus";
import usePosts from "../hooks/usePosts";
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

  const { handleClose, handleShow, show } = useModal();
  const {
    setNewActionName,
    setNewErrorName,
    setShowNotification,
    showNotification,
    actionName,
    error,
    activateNotification,
  } = useNotificationStatus();

  const { removePostFromContext } = usePosts();

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
        <ActionNotification
          show={showNotification}
          setShow={setShowNotification}
          postAction={actionName}
          errorMessage={error}
        />
        <VerificationModal
          callbackAction={() =>
            removePost(id)
              .then(() => {
                console.log("eliminado");
                setNewActionName("Remove");
                activateNotification(); //aca

                setTimeout(() => {
                  removePostFromContext(id);
                }, 3100);
              })
              .catch((err) => {
                setNewErrorName(err);
                activateNotification();
              })
          }
          title="Delete"
          show={show}
          handleClose={handleClose}
          variant="danger"
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
