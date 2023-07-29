import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("token");

  return token !== null ? children : <Navigate to="/signin" />;
}
