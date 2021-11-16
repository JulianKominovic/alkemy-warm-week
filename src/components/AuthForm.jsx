import { Formik } from "formik";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { SignupSchema } from "../schemas/signup";
import { sendAuthData } from "../services/authApi";
import AuthInputGroup from "./AuthInputGroup";

const AuthForm = () => {
  const [sendingAuthData, setSendingAuthData] = useState(false);
  const [showErrorLogging, setShowErrorLogging] = useState(false);
  const history = useHistory();

  return (
    <>
      {/* IF SENDING DATA === TRUE -> LOADING SPINNER GETS ON  */}
      {!sendingAuthData ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ email, password }) => {
            setSendingAuthData(true);
            sendAuthData(email, password)
              .then(() => history.push("/"))
              .catch((err) => {
                setSendingAuthData(false);
                setShowErrorLogging(true);
              });
          }}
          validationSchema={SignupSchema}
        >
          {(props) => (
            <AuthInputGroup {...props} showErrorLogging={showErrorLogging} />
          )}
        </Formik>
      ) : (
        <Spinner animation="border" role="status" className="align-self-center">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default AuthForm;
