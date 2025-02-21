import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

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
      //console.log(res.data);
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
      //console.log(res.data);
      setIsAuth(true);
      setUser(res.data);
      console.log("user: ", res.data);
    } catch (error) {
      console.log("Error: ", error.response.data.error);
      setErrors(error.response.data.error);
    }
  };

  const checkLogin = async () => {
    return new Promise(async (resolve, reject) => {
      const cookies = Cookies.get();
      console.log(cookies);

      if (cookies.token) {
        console.log(cookies.token);
        try {
          const res = await verifyTokenRequest(cookies.token);
          console.log(res);

          if (!res.data) {
            setIsAuth(false);
            setUser(res.data);
            resolve(false);
          } else {
            setIsAuth(true);
            setUser(null);
            resolve(true);
          }
        } catch (error) {
          setIsAuth(false);
          setUser(null);
          reject(error);
        }
      } else {
        resolve(false); // Si no hay token, devuelve false
      }
    });
  };
  return (
    <AuthContext.Provider
      value={{ user, signup, login, checkLogin, isAuth, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
