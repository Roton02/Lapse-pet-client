import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./ContextProvider/ContextProvider";
import router from "./Routes/Route/Route";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <HelmetProvider>
          <div >
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </ContextProvider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
