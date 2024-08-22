/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import "react-loading-skeleton/dist/skeleton.css";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center mx-auto my-auto justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoute;
