import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
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
    }, 4500);
  }, []);
  const location = useLocation();
  const noHeaderAndFooter =
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
        <div>
          <div className="w-full overflow-x-hidden">
           <Header></Header>
            <div className=" mx-auto">
              <Navbar></Navbar>
              <div className="min-h-[70vh]">
                <Outlet></Outlet>
              </div>
            </div>
             <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Root;


