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
        toast.success('😍 Login successful!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
          });
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
          toast.success('😍 Login successful!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
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
          toast.success('😍 Login successful!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
        <div className="flex flex-col max-w-md mx-auto  mt-5 ">
          <div className=" text-center">
            <h1 className=" text-3xl text-black mb-1 font-bold">
              Login to your Account
            </h1>
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
              <p className="text-black">Login with Google</p>
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
                <path d="M16 0.396c-8.839 0-16 7.196-16 16.084 0 7.084 4.584 13.083 10.941 15.197 0.803 0.149 1.097-0.347 1.097-0.772 0-0.38-0.014-1.389-0.022-2.727-4.453 0.967-5.391-2.145-5.391-2.145-0.731-1.857-1.785-2.352-1.785-2.352-1.461-1.003 0.111-0.984 0.111-0.984 1.615 0.114 2.465 1.677 2.465 1.677 1.434 2.457 3.762 1.747 4.679 1.336 0.147-1.039 0.561-1.748 1.019-2.148-3.553-0.404-7.288-1.786-7.288-7.953 0-1.757 0.623-3.193 1.646-4.318-0.166-0.402-0.714-2.027 0.157-4.227 0 0 1.344-0.431 4.4 1.649 1.279-0.357 2.65-0.536 4.011-0.543 1.361 0.008 2.733 0.186 4.013 0.543 3.052-2.08 4.393-1.649 4.393-1.649 0.875 2.2 0.328 3.825 0.161 4.227 1.026 1.126 1.642 2.561 1.642 4.318 0 6.181-3.739 7.545-7.303 7.944 0.574 0.495 1.085 1.467 1.085 2.961 0 2.136-0.02 3.861-0.02 4.386 0 0.429 0.288 0.928 1.107 0.772 6.348-2.12 10.928-8.113 10.928-15.197 0-8.888-7.163-16.084-16-16.084z"></path>
              </svg>

              <p className="text-black">Login with Github</p>
            </button>
          </div>
          <div className="flex text-black items-center w-full my-1">
            <hr className="w-full border border-black" />
            <p className="px-3">OR</p>
            <hr className="w-full border border-black" />
          </div>
          <form onSubmit={handleSubmitLogin} className="space-y-2">
            <div className="space-y-1">
              <div>
                <label
                  htmlFor="email"
                  className="block text-black mb-2 text-sm"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full bg-black text-white px-3 py-2 border rounded-md"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="text-sm text-black">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full bg-black text-white px-3 py-2 border rounded-md "
                />
                {error && <p>{error.split("/")[1].split(")")[0]}</p>}
                <span
                  className="absolute top-10 right-4"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <IoIosEye className="text-white" />
                  ) : (
                    <IoIosEyeOff className="text-white" />
                  )}
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
              <p className="text-md text-black text-center mt-3">
                Dont have account?
                <Link
                  to={"/register"}
                  rel="noopener noreferrer"
                  className="focus:underline hover:underline font-semibold"
                >
                  {" "}
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
