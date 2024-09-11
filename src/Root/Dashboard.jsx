/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import {
  FaAd,
  FaAdn,
  FaCalendar,
  FaCampground,
  FaCanadianMapleLeaf,
  FaCreativeCommons,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LoaderVideo from "../assets/Banner.mp4";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // localStorage.setItem("theme", "dark");

  useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    const theme = localStorage.getItem("theme");

    document
      .querySelector("html")
      .setAttribute("data-theme", theme == "light" ? "dark" : "light");
  }, []); // Re-run effect when theme changes

  return (
    <>
      {false ? (
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
        <div className="   ">
          <div className="flex  ">
            {/* dashboard side bar */}
            <div className="fixed  w-[320px]">
              <div className="absolute block md:block lg:hidden">
                <div className="text-center">
                  <button
                    className="mt-7 ml-7"
                    type="button"
                    onClick={toggleDrawer}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
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
                      className="w-4 h-4 mr-2.5n "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    {} Admin Panel
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

                  <div className=" grid grid-cols-1 items-center ">
                    {isAdmin ? (
                      <>
                        <NavLink to="/dashboard/users">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaUsers></FaUsers>
                              All Users
                            </span>
                            <span className="relative invisible">
                              All Users
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/fets">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaList></FaList>
                              All Pets
                            </span>
                            <span className="relative invisible">All Pets</span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/admin/AllDonation">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaList></FaList>
                              All Donation
                            </span>
                            <span className="relative invisible">
                              All Donation
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/addPet">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaAd></FaAd>
                              Add a pet
                            </span>
                            <span className="relative invisible">
                              All Users
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myAddedPeats">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCalendar></FaCalendar>
                              My added pets
                            </span>
                            <span className="relative invisible">
                              My added pets
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/adoptionRequest">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaAdn></FaAdn>
                              Adoption Request
                            </span>
                            <span className="relative invisible">
                              Adoption Request
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/CreateCampaign">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCreativeCommons></FaCreativeCommons>
                              Create Donation Campaign
                            </span>
                            <span className="relative invisible">
                              {" "}
                              Create Donation Campaign
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myDonationCampaign">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                              My Donation Campaigns
                            </span>
                            <span className="relative invisible">
                              My Donation Campaigns
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myDonation">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaList></FaList>
                              My Donations
                            </span>
                            <span className="relative invisible">
                              My Donations
                            </span>
                          </a>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/dashboard/addPet">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaAd></FaAd>
                              Add a pet
                            </span>
                            <span className="relative invisible">
                              All Users
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myAddedPeats">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCalendar></FaCalendar>
                              My added pets
                            </span>
                            <span className="relative invisible">
                              My added pets
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/adoptionRequest">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaAdn></FaAdn>
                              Adoption Request
                            </span>
                            <span className="relative invisible">
                              Adoption Request
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/CreateCampaign">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCreativeCommons></FaCreativeCommons>
                              Create Donation Campaign
                            </span>
                            <span className="relative invisible">
                              {" "}
                              Create Donation Campaign
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myDonationCampaign">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                              My Donation Campaigns
                            </span>
                            <span className="relative invisible">
                              My Donation Campaigns
                            </span>
                          </a>
                        </NavLink>
                        <NavLink to="/dashboard/myDonation">
                          <a
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
                            <span className="absolute gap-2 flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                              <FaList></FaList>
                              My Donations
                            </span>
                            <span className="relative invisible">
                              My Donations
                            </span>
                          </a>
                        </NavLink>
                      </>
                    )}
                    <hr />
                    <Link to="/">
                      <a
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
                  </div>
                </div>
              </div>
              <div className="hidden lg:block   bg-[#ff4880]">
                <div className="w-72 min-h-screen">
                  <ul className="menu p-4">
                    {isAdmin ? (
                      <>
                        <li>
                          <Link to="/dashboard/users">
                            <FaUsers></FaUsers>
                            All Users
                          </Link>
                        </li>
                        <li>
                          <NavLink to="/dashboard/fets">
                            <FaList></FaList>
                            All Pets
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/admin/AllDonation">
                            <FaList></FaList>
                            All Donation
                          </NavLink>
                        </li>
                        <hr />
                        <li>
                          <NavLink to="/dashboard/addPet">
                            <FaAd></FaAd>
                            Add a pet
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myAddedPeats">
                            <FaCalendar></FaCalendar>
                            My added pets
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/dashboard/adoptionRequest">
                            <FaAdn></FaAdn>
                            Adoption Request
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/CreateCampaign">
                            <FaCreativeCommons></FaCreativeCommons>
                            Create Donation Campaign
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myDonationCampaign">
                            <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                            My Donation Campaigns
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myDonation">
                            <FaList></FaList>
                            My Donations
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <NavLink to="/dashboard/addPet">
                            <FaAd></FaAd>
                            Add a pet
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myAddedPeats">
                            <FaCalendar></FaCalendar>
                            My added pets
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/dashboard/adoptionRequest">
                            <FaAdn></FaAdn>
                            Adoption Request
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/CreateCampaign">
                            <FaCreativeCommons></FaCreativeCommons>
                            Create Donation Campaign
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myDonationCampaign">
                            <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                            My Donation Campaigns
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/myDonation">
                            <FaList></FaList>
                            My Donations
                          </NavLink>
                        </li>
                      </>
                    )}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                      <NavLink to="/">
                        <FaHome></FaHome>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/listing">
                        <FaSearch></FaSearch>
                        Pet Listing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/campaign">
                        <FaCampground></FaCampground>
                        Donation Campaign
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* dashboard content */}
            <div className="w-full flex justify-end">
            <div
              className="flex justify-center min-h-screen bg-gradient-to-bl from-pink-300 via-transparent custom "
              // style={{  " }}
            >
              <Outlet></Outlet>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
//
