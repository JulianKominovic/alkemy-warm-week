import React, { useEffect, useState } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import PostActionButtons from "../components/PostActionButtons";
import useSpecificPost from "../hooks/useSpecificPost";

const PostInfo = ({ previewPost }) => {
  const { id } = useParams();
  const { setPostId, currentPost } = useSpecificPost();
  const [post, setPost] = useState({});

  useEffect(() => {
    if (previewPost !== undefined) {
      setPost(previewPost);
    } else {
      setPostId(id);
      setPost(currentPost);
    }
  }, [id, previewPost, currentPost, setPostId]);

  return (
    <Container className="my-4">
      <Row>
        <h1>
          <Badge bg="secondary" className="my-4">
            {post.id}
          </Badge>
          <br />
          {post.title}
        </h1>
      </Row>
      <Row>
        <p>{post.body}</p>
      </Row>
      <Row>
        <PostActionButtons id={post.id}></PostActionButtons>
      </Row>
    </Container>
  );
};

export default PostInfo;
