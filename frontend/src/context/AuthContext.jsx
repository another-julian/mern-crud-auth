import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setIsAuth(true);
      setUser(res.data);
      console.log("user: ", res.data);
    } catch (error) {
      console.log(error.response.data.error);
      setErrors(error.response.data.error);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
    } catch (error) {
      console.log("Error: ", error.response.data.error);
      setErrors(error.response.data.error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, signup, login, isAuth, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
