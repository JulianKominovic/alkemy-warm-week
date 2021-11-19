import React from "react";
import { Row, InputGroup, FormControl } from "react-bootstrap";

const EditingPostForm = ({ defaultValues, setPostValues }) => {
  return (
    <Row>
      <InputGroup className="mb-3">
        <InputGroup.Text id="post-title">Title</InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Post title"
          aria-label="Post title"
          aria-describedby="post-title-input"
          defaultValue={defaultValues.title}
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
          defaultValue={defaultValues.body}
          onChange={(e) => {
            setPostValues((prev) => {
              return { ...prev, body: e.target.value };
            });
          }}
        />
      </InputGroup>
    </Row>
  );
};

export default EditingPostForm;
