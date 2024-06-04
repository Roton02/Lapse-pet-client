import {
  FaAd,
  FaAdn,
  FaBook,
  FaCalendar,
  FaCanadianMapleLeaf,
  FaCreativeCommons,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const isAdmin = false;

  return (
    <div className="flex bg-gradient-to-bl from-pink-300 via-transparent">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#ff4880]">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
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
    </div>
  );
};

export default Dashboard;
