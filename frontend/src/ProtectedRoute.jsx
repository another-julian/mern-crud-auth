import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";

function ProtectedRoute() {
  const { isAuth, isChekingAuth } = useAuth();

  if (isChekingAuth) return <p>Cargando...</p>;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;
