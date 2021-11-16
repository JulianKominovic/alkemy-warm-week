import { Form, Button, Alert } from "react-bootstrap";

const AuthInputGroup = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  showErrorLogging,
}) => {
  return (
    //   AUTHENTICATION FORM
    <Form className="px-4 container-sm " onSubmit={handleSubmit}>
      {/* EMAIL FIELD */}
      <Form.Group className="my-4">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        ></Form.Control>

        <Alert variant="info" className="py-1 my-1">
          Psss just type:{" "}
          <b style={{ overflowWrap: "break-word" }}>challenge@alkemy.org</b>
        </Alert>

        {errors.email && touched.email ? (
          <Alert variant="danger" className="p-2 my-2">
            {errors.email}
          </Alert>
        ) : null}
      </Form.Group>
      {/* PASSWORD FIELD */}
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        ></Form.Control>

        <Alert variant="info" className="py-1 my-1">
          Psss just type: <b style={{ overflowWrap: "break-word" }}>react</b>
        </Alert>

        {errors.password && touched.password ? (
          <Alert variant="danger" className="p-2 my-2">
            {errors.password}
          </Alert>
        ) : null}
      </Form.Group>
      {/* SUBMIT BUTTON */}
      <div className="d-grid">
        <Button variant="primary" className="my-4" type="submit">
          Log in
        </Button>
        {/* AUTH STATUS */}
      </div>
      {showErrorLogging ? (
        <div className="d-grid">
          <Alert variant="danger">
            Your email or password are incorrect. Try again.
          </Alert>
        </div>
      ) : null}
    </Form>
  );
};

export default AuthInputGroup;
