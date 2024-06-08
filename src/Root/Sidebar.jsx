import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { FaAd, FaAdn, FaCalendar, FaCanadianMapleLeaf, FaCreativeCommons, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isAdmin] = useAdmin()
  console.log(isAdmin);
  return (
   <>
   <button className="flex md:hidden text-3xl font-bold pt-10 pl-5" onClick={()=>setIsTrue(!isTrue)}><IoReorderThree /></button>

   <aside className={` ${isTrue ? 'hidden md:block' : "inline" }  flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}>
      

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          john@example.com
        </p>
      </div>
    </aside>
    <div className="w-64 min-h-screen bg-[#ff4880]">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/fets">
                  <FaList></FaList>
                  All Pets
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminHome">
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
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
   </>
  );
};

export default Sidebar;
