import { Stack } from "react-bootstrap";
import AuthForm from "../components/AuthForm";
import { Redirect } from "react-router-dom";
const Login = () => {
  const isAuthenticated =
    localStorage.getItem("token") === process.env.REACT_APP_SECRET_TOKEN;
  return (
    <>
      {isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div className="p-4 vh-100 d-flex">
          <Stack
            gap={3}
            className="border border-2 rounded-3 mx-auto w-100 align-self-center p-4 shadow-sm"
            style={{
              maxWidth: "400px",
              height: "fit-content",
            }}
          >
            <h1 className="text-center mb-1">Login</h1>
            <AuthForm />
          </Stack>
        </div>
      )}
    </>
  );
};

export default Login;
