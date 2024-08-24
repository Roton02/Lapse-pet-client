import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./ContextProvider/ContextProvider";
import router from "./Routes/Route/Route";
import { Player } from "@lottiefiles/react-lottie-player";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ReactPlayer from "react-player";
// import LoaderVideo from "./assets/Banner.mp4";
import lottie from './assets/Loader.json'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <HelmetProvider>
          <div className="px-1 md:px-0">
            <RouterProvider
              fallbackElement={
                <div className="flex min-h-screen my-auto items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src={lottie}
                    style={{ height: "300px", width: "300px" }}
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
