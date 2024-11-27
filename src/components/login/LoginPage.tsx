import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Login
      onRegisterClick={() => navigate("/registration")}
      onForgotPasswordClick={() => navigate("/password-recovery")}
    />
  );
};

export default LoginPage;
