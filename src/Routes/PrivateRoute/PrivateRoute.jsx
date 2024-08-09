// PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import ReactPlayer from "react-player";
import LoaderVideo from "../../assets/Banner.mp4";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Render skeleton loaders while loading
    return (
      <div className="bg-[#110e11] w-screen flex justify-center items-center min-h-screen relative">
        <ReactPlayer
          url={LoaderVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-screen h-full"
        />
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
