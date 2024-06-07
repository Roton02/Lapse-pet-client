import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Helmet } from "react-helmet-async";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false)
  const { login, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);


  // console.log(name);
  const [error , setError] = useState(null)
  const handleSubmitLogin = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
     console.log(email,password);
    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(' successful Login ')
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message)
        toast.warning(error.message.split('(')[1])
      });
    // console.log(user);
    e.target.reset();
  };
  const handleSigninWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        console.log('object');
          console.log(res.data);
        navigate(location?.state ? location.state : "/");
      })
      })
      .catch((error) => {
        setError(error.message)
        toast.warning(error.message)
      });
  };
  const handleSigninWithGithub = () => {
    githubSignIn()
    .then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
    }
    axiosPublic.post('/users', userInfo)
    .then(res =>{
      console.log('object');
        console.log(res.data);
      navigate(location?.state ? location.state : "/");
    })
    })
      .catch((error) => {
        setError(error.message);
        toast.warning(error.message)
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="flex flex-col max-w-md mx-auto border-2 bg-base-200 lg:my-5 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">
            Login to access your account
          </p>
        </div>
        <form onSubmit={handleSubmitLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type= {toggle? "text" :"password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {
                error && <p>{error.split('/')[1].split(')')[0]}</p> 
              }
              <span className="absolute top-10 right-4" onClick={()=> setToggle(!toggle)}>{toggle?<IoIosEye/> : <IoIosEyeOff/>}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 btn btn-secondary hover:bg-pink-700 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-lg text-center dark:text-gray-600">
              Dont have an account yet?
              <Link
                to="/register"
                className="hover:underline ml-4 text-green-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
        <div className="my-4">
          <div className="flex items-center border-b-2 p-2 justify-center  ">
            <p>Login with social accounts</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleSigninWithGoogle()}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
            <button
              onClick={() => handleSigninWithGithub()}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;