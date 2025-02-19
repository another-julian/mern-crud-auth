import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

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
  return (
    <AuthContext.Provider value={{ user, signup, isAuth, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
