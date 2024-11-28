import React from "react";
import Login from "../login/Login";

const HomePage: React.FC = () => {
  return (
    <div> 
      <Login 
        onRegisterClick={() => window.location.href = "/registration"}
        onForgotPasswordClick={() => window.location.href = "/password-recovery"}
      />
      <div>Спецпредложения</div>
     
    </div>
  );
};

export default HomePage;
