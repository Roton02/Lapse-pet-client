import { Link } from "react-router-dom";

import lottie from "../../assets/lottie.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import img   from '../../assets/404-removebg-preview.png'

const ErrorPage = () => {
  return (
    <div className="my-4">
      <Helmet>
        <title>Error Page</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className=" h-96 w-96 mx-auto">
        <img src={img} alt="" />
      </div>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="max-w-md text-center">
          <p className="text-sm my-5 font-anton ">
            Sorry, we could not find this page.
          </p>
          <Link to="/">
            <button className=" p-2  hover:bg-pink-500  rounded font-bold bg-[#ff4880] text-black  font-anton ">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
