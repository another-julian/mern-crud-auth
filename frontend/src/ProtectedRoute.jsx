import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";

function ProtectedRoute() {
  const { checkLogin } = useAuth();

  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLogin()
      .then((isAuthenticated) => {
        setIsAuth(isAuthenticated);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error en la autenticación:", error);
        setIsAuth(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Cargando...</p>;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;
