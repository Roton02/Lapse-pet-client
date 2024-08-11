import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
// import Header from "../Shared/Header/Header";
import ReactPlayer from "react-player";
import LoaderVideo from "../assets/Banner.mp4";
import { useEffect, useState } from "react";
// import Navbar2 from "../Shared/Navbar/Navbar2";

AOS.init();

const Root = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const location = useLocation();
  const login_and_register =
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("Login");
  console.log(location);
  return (
    <>
      {loading ? (
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
      ) : (
        <div className="">
          <Navbar />
          <div className="flex flex-col w-full h-screen">
            <div className={`flex-1 ${login_and_register && 'bg-white'}`}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Root;
