import "animate.css";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import "./Navbar.css";
const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <nav className="relative bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] ">
        <div className="container py-4 mx-auto max-w-7xl px-4 lg:px-0">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
            <Link to="/">
            <img
              className="w-24 md:w-32 lg:w-40"
              src="https://i.ibb.co/L0v6r6Z/logo-finel-removebg-preview.png"
              alt=""
            />
          </Link>
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=""
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className={`flex lg:flex lg:items-center lg:justify-between w-full lg:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} lg:block`}>
              <div className=" flex flex-col   p-10 lg:flex-row lg:items-center lg:mx-8 lg:space-x-2 ">
              <NavLink
              to="/"
              className="btn btn-sm  border-b-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/listing"
              className="btn  btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Pet Listing
            </NavLink>
            <NavLink
              to="/campaign"
              className="btn btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Donation Campaigns
            </NavLink>
            <NavLink
              to="/contract"
              className="btn btn-sm border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Contract
            </NavLink>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
              <label className="mx-5 cursor-pointer grid place-items-center">
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
          {user ? (
            <div className="flex items-center ">
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
                    ----- {user?.displayName} -----
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashBoard"
                      className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                    >
                      DashBoard
                    </NavLink>
                  </li>

                  <button
                    onClick={Logout}
                    className="btn btn-sm btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-md btn-sm  m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#ff4880] transition duration-300 group-hover:text-white ease">
                Login
              </span>
            </Link>
          )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
