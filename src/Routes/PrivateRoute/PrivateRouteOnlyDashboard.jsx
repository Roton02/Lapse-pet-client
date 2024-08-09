// PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
 

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate state={location.pathname} to="/login" />;
  }

  // User is authenticated, render the children components
  return children;
};

export default PrivateRoute;
