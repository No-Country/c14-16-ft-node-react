import { useState } from "react";
import { LoginContext } from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    Boolean(localStorage.getItem("User")) ?? false
  );

  const handleLogin = (value) => setIsLogin(value);
  return (
    <LoginContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
