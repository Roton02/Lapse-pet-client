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
          <div className="px-1 md:px-0">
            <RouterProvider
              fallbackElement={
                <div className="flex h-screen mb-96 items-center justify-center mt-20">
                <div className="flex gap-2">
                  <span className="loading loading-spinner loading-lg"></span>
                  <span className="text-xl font-bold">Looding...</span>
                </div>
              </div>
              }
              router={router}
            />
          </div>
        </HelmetProvider>
      </ContextProvider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
