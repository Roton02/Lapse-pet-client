import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./ContextProvider/ContextProvider";
import router from "./Routes/Route/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <div className="max-w-7xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>
);
