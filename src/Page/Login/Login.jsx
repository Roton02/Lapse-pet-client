import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Helmet } from "react-helmet-async";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { login, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  // console.log(name);
  const [error, setError] = useState(null);
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(" successful Login ");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
        toast.warning(error.message.split("(")[1]);
      });
    // console.log(user);
    e.target.reset();
  };
  const handleSigninWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log("object");
          console.log(res.data);
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        setError(error.message);
        toast.warning(error.message);
      });
  };
  const handleSigninWithGithub = () => {
    githubSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log("object");
          console.log(res.data);
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        setError(error.message);
        toast.warning(error.message);
      });
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Lapse-Peat || Login</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="flex items-center   w-full max-w-sm mx-auto overflow-hidden bg-white   lg:max-w-4xl">
        <div className="hidden  lg:block lg:w-1/2 ">
          <video
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/account-login-8677600-6981645.mp4"
            autoPlay="muted"
            loop="loop"
            playsInline
            type="video/mp4"
          ></video>
        </div>
        <div className="flex flex-col max-w-md mx-auto   ">
          <div className=" text-center">
            <h1 className=" text-3xl mb-1 font-bold">Login to your Account</h1>
            

          </div>
          <div className="">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1"
              onClick={() => handleSigninWithGoogle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <div className="my-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1"
              onClick={() => handleSigninWithGithub()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-1">
            <hr className="w-full border border-black" />
            <p className="px-3">OR</p>
            <hr className="w-full border border-black" />
          </div>
          <form onSubmit={handleSubmitLogin} className="space-y-2">
            <div className="space-y-1">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md "
                />
                {error && <p>{error.split("/")[1].split(")")[0]}</p>}
                <span
                  className="absolute top-10 right-4"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-2 font-semibold rounded-md bg-purple-500 text-white"
                >
                  Login
                </button>
              </div>
              <p className="text-md text-center mt-3">Dont have account?
		<Link to={"/register"} rel="noopener noreferrer" className="focus:underline hover:underline font-semibold"> Sign up here</Link>
	</p>

            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
