import React, { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router";
import ActionNotification from "../components/ActionNotification";
import VerificationModal from "../components/VerificationModal";
import { getPostById, updatePost } from "../services/postsApi";
import PostInfo from "./PostInfo";

const PostEdit = () => {
  const [postValues, setPostValues] = useState({ empty: true });
  // MODAL STATE
  const [show, setShow] = useState(false);
  // NOTIFICATION STATE
  const [showNotification, setShowNotification] = useState(false);
  const [actionName, setActionName] = useState("");
  const [error, setError] = useState("");
  const handleShowNotification = () => setShowNotification(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  useEffect(() => {
    getPostById(parseInt(id)).then((res) => setPostValues(res));
  }, [id]);

  return (
    <Container className="py-5">
      <Row>
        <h1>Edit post</h1>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="post-title">Title</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Post title"
            aria-label="Post title"
            aria-describedby="post-title-input"
            defaultValue={postValues.title}
            onChange={(e) => {
              setPostValues((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="post-title">Body</InputGroup.Text>

          <FormControl
            as="textarea"
            aria-label="Post body"
            aria-describedby="post-body-input"
            placeholder="Post body"
            defaultValue={postValues.body}
            onChange={(e) => {
              setPostValues((prev) => {
                return { ...prev, body: e.target.value };
              });
            }}
          />
        </InputGroup>
      </Row>
      <Row className="mx-2 my-4">
        <VerificationModal
          show={show}
          variant="primary"
          handleClose={handleClose}
          title="Save"
          callbackAction={() => {
            updatePost(postValues)
              .then((res) => {
                setError("");
                setActionName("Save");
                handleShowNotification();
              })
              .catch((err) => {
                setActionName("");
                setError(err);
                handleShowNotification();
              });
          }}
        />
        <Button variant="primary" onClick={handleShow}>
          Save
        </Button>
      </Row>
      <Row className="my-5">
        <h2>Live preview</h2>
        <PostInfo post={{ ...postValues }} />
      </Row>

      <ActionNotification
        show={showNotification}
        setShow={setShowNotification}
        postAction={actionName}
        errorMessage={error}
      />
    </Container>
  );
};

export default PostEdit;
