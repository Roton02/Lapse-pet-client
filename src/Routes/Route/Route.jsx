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
          path:'/campaignDetails',
          element: <CampaignDetails></CampaignDetails>
        }
       
      ]
    },
  ]);

  export default router;