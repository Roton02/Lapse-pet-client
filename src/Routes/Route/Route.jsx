import Root from "../../Root/Root";
import ErrorPage from "../../Page/ErrorePage/ErrorPage";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import Listing from "../../Page/Listing/Listing";
import SinglePeatsDetails from "../../Page/SinglePeatsdetails/SinglePeatsDetails";
import CampaignPeats from "../../Page/CampaignPeats/CampaignPeats";
import CampaignDetails from "../../Page/CampaignDetails/CampaignDetails";
import Dashboard from "../../Root/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import PrivateRouteOnlyDashboard from "../PrivateRoute/PrivateRoute"
import AddPets from "../../DashBorad/AddPet/AddPets";
import MyAddedPeats from "../../DashBorad/MyAdded/MyAddedPeats";
import AdoptionRequest from "../../DashBorad/RequestedPeats/AdoptionRequest";
import CreateCampaign from "../../DashBorad/CreateCampaign/CreateCampaign";
import MyDonationCampaign from "../../DashBorad/MyDonationCampaign/MyDonationCampaign";
import MyDonation from "../../DashBorad/MyDonation/MyDonation";
import UpdatePets from "../../DashBorad/MyAdded/UpdatePets";
import MyDonationCampaignEdit from "../../DashBorad/MyDonationCampaign/MyDonationCampaignEdit";
import AllUsers from "../../DashBorad/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AdminAllPets from "../../DashBorad/AdminAllPets/AdminAllPets";
import AdminOnlyUpdate from "../../DashBorad/AdminAllPets/AdminOnlyUpdate";
// import Sidebar from "../../Root/Sidebar";
import AdminCampaign from "../../DashBorad/AdminCampaign/AdminCampaign";
import AdminCampaignEdit from "../../DashBorad/AdminCampaign/AdminCampaignEdit";
import Contract from "../../Shared/Contract/Contract";
import Profile from "../../Page/Register/Profile/Profile";
import UpdateProfile from "../../Page/Register/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/listing",
        element: <Listing></Listing>,
      },
      {
        path: "/singlePage/:id",
        element: (
          <PrivateRoute>
            <SinglePeatsDetails></SinglePeatsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign",
        element: <CampaignPeats></CampaignPeats>,
      },
      {
        path: "/campaignDetails/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "addPet",
        element: <AddPets></AddPets>,
      },
      {
        path: "myAddedPeats",
        element: <MyAddedPeats></MyAddedPeats>,
      },
      {
        path: "adoptionRequest",
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: "CreateCampaign",
        element: <CreateCampaign></CreateCampaign>,
      },
      {
        path: "myDonationCampaign",
        element: <MyDonationCampaign></MyDonationCampaign>,
      },
      {
        path: "myDonation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "myAddedPeats/updatepets/:id",
        element: <UpdatePets></UpdatePets>,
      },
      {
        path: "myDonationCampaign/updateCampaign/:id",
        element: <MyDonationCampaignEdit></MyDonationCampaignEdit>,
      },
      // admin only routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "fets",
        element: (
          <AdminRoute>
            <AdminAllPets></AdminAllPets>
          </AdminRoute>
        ),
      },
      {
        path: "fets/updatepets/:id",
        element: (
          <AdminRoute>
            <AdminOnlyUpdate></AdminOnlyUpdate>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lapsepets.vercel.app/allCategory/${params.id}`),
      },
      {
        path: "admin/AllDonation",
        element: (
          <AdminRoute>
            <AdminCampaign></AdminCampaign>
          </AdminRoute>
        ),
      },
      {
        path: "admin/AllDonation/updateCampaignByAdmin/:id",
        element: (
          <AdminRoute>
            <AdminCampaignEdit></AdminCampaignEdit>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
