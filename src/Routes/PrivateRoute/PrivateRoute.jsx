/* eslint-disable react/prop-types */
// PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext } from "../../ContextProvider/ContextProvider";
// import ReactPlayer from "react-player";
// import LoaderVideo from "../../assets/Banner.mp4";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Render skeleton loaders while loading
    return (
      <div className="flex items-center justify-center mt-20">
        <div className="flex gap-2">
          <span className="loading loading-spinner loading-lg"></span>
          <span className="text-xl font-bold">Looding...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate state={location.pathname} to="/login" />;
  }

  // User is authenticated, render the children components
  return children;
};

export default PrivateRoute;
