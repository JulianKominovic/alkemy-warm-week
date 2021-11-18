import React, { useState, useEffect } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import PostActionButtons from "../components/PostActionButtons";
import { getPostById } from "../services/postsApi";

const PostInfo = ({ post }) => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState({});
  useEffect(() => {
    if (post === undefined) {
      getPostById(parseInt(id))
        .then((res) => setPostInfo(res))
        .catch((err) => console.log(err));
    } else {
      setPostInfo(post);
    }
  }, [id, post]);

  return (
    <Container className="my-4">
      <Row>
        <h1>
          <Badge bg="secondary" className="my-4">
            {postInfo.id}
          </Badge>
          <br />
          {postInfo.title}
        </h1>
      </Row>
      <Row>
        <p>{postInfo.body}</p>
      </Row>
      <Row>
        <PostActionButtons id={postInfo.id}></PostActionButtons>
      </Row>
    </Container>
  );
};

export default PostInfo;
