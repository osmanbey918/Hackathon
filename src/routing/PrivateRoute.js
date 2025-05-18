import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, role }) {
  const user = useSelector((store) => store.auth.user);
  // If role is specified, check user.role
  if (!user) return <Navigate to="/login" />;
  // if (role && user.role !== role) return <Navigate to="/home" />;
  return children;
}