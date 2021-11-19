import React from "react";
import { Container, Row } from "react-bootstrap";
import ActionButton from "../components/ActionButton";
import ActionNotification from "../components/ActionNotification";
import EditingPostForm from "../components/EditingPostForm";
import useNotificationStatus from "../hooks/useNotificationStatus";
import usePosts from "../hooks/usePosts";
import { updatePost } from "../services/postsApi";
import PostInfo from "./PostInfo";
import useModal from "../hooks/useModal";
import useSpecificPost from "../hooks/useSpecificPost";

const PostEdit = () => {
  const { modifyPost } = usePosts();

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

  const { postId, currentPost, setCurrentPost } = useSpecificPost();

  return (
    <Container className="py-5">
      <Row>
        <h1>Edit post</h1>
      </Row>
      <EditingPostForm
        setPostValues={setCurrentPost}
        defaultValues={currentPost}
      />
      <ActionButton
        callbackAction={() => {
          updatePost(currentPost)
            .then(() => {
              setNewActionName("Save");
              modifyPost(parseInt(postId), currentPost);
              activateNotification();
            })
            .catch((err) => {
              setNewErrorName(err);
              activateNotification();
            });
        }}
        actionName="Save"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Row className="my-5">
        <h2>Live preview</h2>
        <PostInfo previewPost={{ ...currentPost }} />
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
