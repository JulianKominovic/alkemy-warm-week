import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import PostActionButtons from "./PostActionButtons";

const PostCard = ({ title, id }) => {
  return (
    <ListGroup.Item key={id}>
      <Row className="align-items-center ">
        <Col xs={2}>
          <h2>{id}</h2>
        </Col>
        <Col>
          <h3 className="fs-4 fw-light">{title}</h3>
        </Col>
      </Row>
      <PostActionButtons id={id}></PostActionButtons>
    </ListGroup.Item>
  );
};

export default PostCard;
