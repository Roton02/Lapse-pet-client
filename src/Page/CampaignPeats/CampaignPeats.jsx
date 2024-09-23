/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useAuth from "../../Hooks/useAuth";

const fetchCampaigns = async ({ pageParam = 1 }) => {
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get(
    `/campaignAllPeats?page=${pageParam}&limit=10`
  );
  return res.data;
};

const CampaignPeats = () => {
  const { user } = useAuth();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["campaigns"],
      queryFn: fetchCampaigns,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length ? pages.length + 1 : undefined;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="  mx-auto">
      <Helmet>
        <title>Lapse-Pet || Campaign</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <SectionHeader
        header={"Donation Campaign"}
        subHeader={`Dear ${
          user?.displayName || "User"
        } , Your Donated Money save a life .`}
      ></SectionHeader>

      <div className=" max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
        {status === "loading"
          ? // Render skeleton loaders while data is loading
            Array(6)
              .fill()
              .map((_, index) => (
                <div key={index}>
                  <Skeleton
                    width={300}
                    height={10}
                    count={5}
                    style={{ marginBottom: "7px" }}
                  />
                </div>
              ))
          : // Render actual campaign data
            data?.pages.map((page, pageIndex) =>
              page.map((campaignItem) => (
                <Link
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="mt-5"
                  key={campaignItem._id}
                  to={`/campaignDetails/${campaignItem._id}`}
                >
                  <a
                    href="#"
                    className="group relative block h-[370px] md:h-96"
                  >
                    <span className="absolute inset-0 border-2 border-dashed border-black dark:"></span>
                    <div className="relative flex h-full transform items-end border-2 border-black  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                        <img
                          className="h-56 w-80"
                          src={campaignItem.image}
                          alt="Something is wrong"
                        />

                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          {campaignItem.name}
                        </h2>

                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          Donated : {campaignItem.donatedAmount}
                        </h2>
                      </div>

                      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                        <figure className="w-full bg-cover">
                          <img
                            src={campaignItem.image}
                            alt="Something is wrong this image"
                            className="h-64  w-full"
                          />
                        </figure>

                        <p className="mt-4 text-sm ">
                          {campaignItem.sortDescription}
                        </p>

                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-200 ease-out  border-purple-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 delay-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-purple-500  transition-all duration-1000 transform group-hover:translate-x-full ease">
                            Read More
                          </span>
                          <span className="relative invisible">Read More</span>
                        </a>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            )}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        {isFetchingNextPage &&
          // Render skeleton loaders while loading more data
          Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center"
              >
                <Skeleton
                  width={300}
                  height={10}
                  count={5}
                  style={{ marginBottom: "7px", color: "black" }}
                />
                <Skeleton
                  width={300}
                  height={10}
                  count={5}
                  style={{ marginBottom: "7px" }}
                />
                <Skeleton
                  width={300}
                  height={10}
                  count={5}
                  style={{ marginBottom: "7px" }}
                />
              </div>
            ))}
      </div>

      {!hasNextPage && status !== "loading" && (
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      )}
    </div>
  );
};

export default CampaignPeats;
