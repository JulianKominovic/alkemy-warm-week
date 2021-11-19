import React from "react";

import { Container, Row } from "react-bootstrap";
import ActionButton from "../components/ActionButton";
import ActionNotification from "../components/ActionNotification";
import EditingPostForm from "../components/EditingPostForm";
import useNotificationStatus from "../hooks/useNotificationStatus";
import usePosts from "../hooks/usePosts";
import { createPost } from "../services/postsApi";
import PostInfo from "./PostInfo";
import useModal from "../hooks/useModal";
import useAbstractPost from "../hooks/useAbstractPost";

const PostCreate = () => {
  const { addPost } = usePosts();
  const {
    setNewErrorName,
    setNewActionName,
    activateNotification,
    showNotification,
    setShowNotification,
    actionName,
    error,
  } = useNotificationStatus();
  const { handleClose, handleShow, show } = useModal();
  const { post, setPost } = useAbstractPost();
  return (
    <Container className="py-5">
      <Row>
        <h1>Create a post</h1>
      </Row>
      <EditingPostForm setPostValues={setPost} defaultValues={post} />
      <ActionButton
        callbackAction={() => {
          createPost(post)
            .then((res) => {
              setNewActionName("Add");
              addPost(res);
              activateNotification();
            })
            .catch((err) => {
              setNewErrorName(err);
              activateNotification();
            });
        }}
        actionName="Add"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Row className="my-5">
        <h2>Live preview</h2>
        <PostInfo post={{ ...post }} />
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

export default PostCreate;
