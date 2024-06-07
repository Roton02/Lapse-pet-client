import Root from "../../Root/Root";
import ErrorPage from "../../Page/ErrorePage/ErrorPage"
import Home from "../../Page/Home/Home"
import Login from "../../Page/Login/Login"
import Register from "../../Page/Register/Register"
import {
    createBrowserRouter,
  } from "react-router-dom";
import Listing from "../../Page/Listing/Listing";
import SinglePeatsDetails from "../../Page/SinglePeatsdetails/SinglePeatsDetails";
import CampaignPeats from "../../Page/CampaignPeats/CampaignPeats";
import CampaignDetails from "../../Page/CampaignDetails/CampaignDetails";
import Dashboard from "../../Root/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
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



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/listing',
          element: <Listing></Listing>
        },
        {
          path:'/singlePage/:id',
          element: <SinglePeatsDetails></SinglePeatsDetails>
        },
        {
          path:"/campaign",
          element:<CampaignPeats></CampaignPeats>
        },
        {
          path:'/campaignDetails/:id',
          element: <CampaignDetails></CampaignDetails>
        }
       
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>  ,
      children: [
        // normal user routes
       {
        path:'addPet',
        element:<AddPets></AddPets>
       },
       {
        path:'myAddedPeats',
        element:<MyAddedPeats></MyAddedPeats>
       },
       {
        path:'adoptionRequest',
        element:<AdoptionRequest></AdoptionRequest>
       },
       {
        path:'CreateCampaign',
        element:<CreateCampaign></CreateCampaign>
       },
       {
        path:'myDonationCampaign',
        element:<MyDonationCampaign></MyDonationCampaign>
       },
       {
        path:'myDonation',
        element:<MyDonation></MyDonation>
       },
       {
        path:'myAddedPeats/updatepets/:id',
        element:<UpdatePets></UpdatePets>,
        loader: ({params})=>fetch(`http://localhost:5000/myAdded/?id=${params.id}`)
       },
       {
        path:'myDonationCampaign/updateCampaign/:id',
        element:<MyDonationCampaignEdit></MyDonationCampaignEdit>
       },
        // admin only routes 
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'fets',
          element: <AdminRoute><AdminAllPets></AdminAllPets></AdminRoute>
        },
        {
          path:'fets/updatepets/:id',
          element:<AdminOnlyUpdate></AdminOnlyUpdate>,
          loader: ({params})=>fetch(`http://localhost:5000/allCategory/${params.id}`)
         }

      ]
    }
  ]);

  export default router;