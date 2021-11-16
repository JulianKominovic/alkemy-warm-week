import { Stack } from "react-bootstrap";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
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
  );
};

export default Login;
