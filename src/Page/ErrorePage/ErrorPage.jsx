import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import lottie2 from "../../assets/lottie2.json"
// import Lottie from "react-lottie-player";
const ErrorPage = () => {
  return (
    <div className="my-4">
      <Helmet>
        <title>Error Page</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-4 ">
        <div className="flex justify-center items-center">
        <lottie-player
          src="https://lottie.host/1ee7c555-22eb-4857-8902-73e1d84ccf34/P4qFlhCYb4.json"
          background="#FFFFFF"
          speed="1"
          class="w-80 h-80"
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        </div>

        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <div className="max-w-md text-center">
            <p className="text-sm my-5 font-anton ">
              Sorry, we could not find this page.
            </p>
            <Link to="/">
              <button className="btn bg-[#742bb8] hover:text-black text-white font-anton ">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
