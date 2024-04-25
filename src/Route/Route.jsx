import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../pages/ErrorePage/ErrorPage";


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
       
      ]
    },
  ]);

  export default router;