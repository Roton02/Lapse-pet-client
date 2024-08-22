import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
const HomNavbar = () => {
  const { Logout, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "light" ? true : false;
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "light" : " dark");

    // Apply theme to HTML element
    // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]); // Re-run effect when theme changes
  console.log(user);
  return (
    <div>
      <nav className="relative ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="w-48">
              <Link to="/">
                <img
                  src="https://i.ibb.co/T1fdtf3/logo2-removebg-preview.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex gap-5 flex-col items-center md:flex-row md:mx-6">
              <NavLink to="/" className=" btn btn-sm">
                Home
              </NavLink>
              <NavLink to="/listing" className=" btn btn-sm ">
                Pet Listing
              </NavLink>
              <NavLink to="/campaign" className="  btn btn-sm">
                Donation Campaigns
              </NavLink>
              <div>
                <label className="mr-6 cursor-pointer grid place-items-center">
                  <input
                    type="checkbox"
                    onClick={toggleTheme}
                    checked={theme}
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  />
                  <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <div className="flex items-center ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" border rounded-full border-gray-300 z-[110]  avatar"
                    >
                      <div className=" rounded-full w-9 md:w-12  ">
                        <img alt="" src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content hidden lg:flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-40"
                  >
                    <li className="mx-auto  ">{user?.displayName}</li>
                    <li>
                      <NavLink
                        to="/dashBoard"
                        className="btn btm-nav-sm  btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                      >
                        DashBoard
                      </NavLink>
                    </li>

                    <button
                      onClick={Logout}
                      className="rounded-md btn btm-nav-sm m-1 overflow-hidden relative group cursor-pointer border-2 p-1 font-medium border-[#ff4880] text-[#ff4880] hover:text-white"
                    >
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative  text-[#ff4880] transition duration-300 group-hover:text-white ease">
                        Logout
                      </span>
                    </button>
                  </ul>
                </div>
              </div>
              {/* {user ? (
          
        ) : (
          <Link
           
            to="/login"
            className="rounded-md btn-sm md:btn-md p-1 md:p-2 lg:px-3.5 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#ff4880] transition duration-300 group-hover:text-white ease">
              Login
            </span>
          </Link>
        )} */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomNavbar;
