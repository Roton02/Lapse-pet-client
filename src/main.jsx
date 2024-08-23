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
import ReactPlayer from "react-player";
import LoaderVideo from "./assets/Banner.mp4";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <HelmetProvider>
          <div className="px-1 md:px-0">
            <RouterProvider
              fallbackElement={
                <div className="bg-[#110e11] w-screen flex justify-center items-center min-h-screen relative">
                  <ReactPlayer
                    url={LoaderVideo}
                    playing
                    muted
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 w-screen h-full"
                  />
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
