import "animate.css";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import "./Navbar.css";
const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const { Logout, user } = useContext(AuthContext);

  console.log(user);
  return (
    <div className="bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]  w-full  md:flex md:justify-between md:items-center ">
      <nav className="  navbar z-[100] max-w-7xl mx-auto">
        <div className="navbar-start z-50">
          <div className="block md:block lg:hidden">
            <div className="text-center">
              <button className="" type="button" onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-4 mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h5
                id="drawer-label"
                className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
              >
                <svg
                  className="w-4 h-4 mr-2.5n mr-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                Lapse-pet
              </h5>
              <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="drawer-example"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>

              <div className=" grid grid-cols-1 ">
                <Link to="/">
                  <a
                    onClick={toggleDrawer}
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Home
                    </span>
                    <span className="relative invisible">Home</span>
                  </a>
                </Link>
                <Link to="/listing">
                  <a
                    onClick={toggleDrawer}
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Pet Listing
                    </span>
                    <span className="relative invisible">Pet Listing</span>
                  </a>
                </Link>
                <Link to="/campaign">
                  <a
                    onClick={toggleDrawer}
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Donation Campaigns
                    </span>
                    <span className="relative invisible">
                      Donation Campaigns
                    </span>
                  </a>
                </Link>
                <Link to="/contract">
                  <a
                    onClick={toggleDrawer}
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Contract
                    </span>
                    <span className="relative invisible">contract</span>
                  </a>
                </Link>
                <hr />
                {user ? (
                  <div className="grid grid-cols-1">
                    <Link to="/profile">
                      <a
                        onClick={toggleDrawer}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Profile
                        </span>
                        <span className="relative invisible">Profile</span>
                      </a>
                    </Link>
                    <Link to="/dashboard/addPet">
                      <a
                        onClick={toggleDrawer}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          DashBoard
                        </span>
                        <span className="relative invisible">DashBoard</span>
                      </a>
                    </Link>
                    <Link to="/updateProfile">
                      <a
                        onClick={toggleDrawer}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Settings
                        </span>
                        <span className="relative invisible">Settings</span>
                      </a>
                    </Link>

                    <div>
                      <a
                        onClick={Logout}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Logout
                        </span>
                        <span className="relative invisible">Logout</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1">
                    <Link to="/login">
                      <a
                        onClick={toggleDrawer}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Login
                        </span>
                        <span className="relative invisible">Login</span>
                      </a>
                    </Link>
                    <Link to="/register">
                      <a
                        onClick={toggleDrawer}
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-purple-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Register
                        </span>
                        <span className="relative invisible">Register</span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link data-aos="fade-" data-aos-duration="2500" to="/">
            <h1 className="text-2xl customNav md:text-4xl  text-black">
              <span className="text-pink-600">Lapse</span>-Pet
            </h1>
          </Link>
        </div>

        <div className="navbar-end ">
          <div className=" space-x-2  hidden lg:flex ">
            <NavLink to="/" className=" p-2 px-2 font-medium ">
              Home
            </NavLink>
            <NavLink to="/listing" className=" p-2 px-2 font-medium  ">
              Pet Listing
            </NavLink>
            <NavLink to="/campaign" className="  p-2 px-2 font-medium ">
              Donation Campaigns
            </NavLink>
            <NavLink to="/contract" className="  p-2 px-2 font-medium ">
              Contract
            </NavLink>
          </div>

          {user ? (
            <div className="flex items-center ml-3 ">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div
                    tabIndex={0}
                    role="button"
                    className=" border rounded-full border-gray-300 z-[110]  avatar"
                  >
                    <div className=" rounded-full w-9 md:w-12  ">
                      <img alt="" src={user?.photoURL || ""} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-64"
                >
                  <div className="flex justify-center">
                    <img
                      className="rounded-full w-20 text-center"
                      src={user?.photoURL || ""}
                      alt=""
                    />
                  </div>
                  <li className="mx-auto text-xl font-bold ">
                    {user?.displayName}
                  </li>
                  <li className="">
                    <NavLink
                      to="/profile"
                      className=" border-b-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/addPet"
                      className="border-b-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      DashBoard
                    </NavLink>
                  </li>

                  <li>
                    <button
                      onClick={Logout}
                      className="border-b-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-md pb-1 ml-3 px-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-[#ff4880] transition duration-300 group-hover:text-white ease">
                Login
              </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
