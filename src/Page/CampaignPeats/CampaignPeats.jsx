import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

const fetchCampaigns = async ({ pageParam = 1 }) => {
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get(
    `/campaignAllPeats?page=${pageParam}&limit=10`
  );
  return res.data;
};

const CampaignPeats = () => {
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
        <title>Lapse-Peat || Campaign</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <header>
        <div
          className={`w-screen h-[200px] mx-auto rounded-b-md bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]`}
        >
          <div
            className="max-w-7xl mx-auto
          "
          >
            <h1 className="text-4xl pt-5 text-center font-bold mb-5 text-[#393d72]">
              ----Donation Campaign----
            </h1>
            <p className="w-36 border-b-4 border-[#393d72] mx-auto"> </p>
            <p className="text-center py-3">
              Your Donated Money save a life ....
            </p>
          </div>
        </div>
      </header>

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
                <div key={campaignItem._id}>
                  <div className="px-0 border bg-[#fbebe2] rounded-xl">
                    <figure className="w-full bg-cover">
                      <img
                        src={campaignItem.image}
                        alt="No uploaded any image"
                        className="rounded-t-xl h-72 rounded-br-full bg-cover w-full"
                      />
                    </figure>
                    <div className="px-5">
                      <div className="flex justify-between">
                        <h2 className="card-title font-bold text-2xl">
                          {campaignItem.name}
                        </h2>
                        <h2 className="font-bold">{campaignItem.date}</h2>
                      </div>
                      <div className="text-sm font-bold text-gray-500">
                        <p>Need : {campaignItem.maxDonation} $</p>
                        <p>Donated : {campaignItem.donatedAmount} $</p>
                      </div>
                      <div className="w-full flex justify-end my-2 mb-3">
                        <Link to={`/campaignDetails/${campaignItem._id}`}>
                          <button className="rounded-md btn-sm btn overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-black">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
      </div>

      <div ref={ref}>
        {isFetchingNextPage &&
          // Render skeleton loaders while loading more data
          Array(3)
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
