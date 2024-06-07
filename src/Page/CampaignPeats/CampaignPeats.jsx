import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import InfiniteScroll from "react-infinite-scroll-component";

const CampaignPeats = () => {
  const axiosPublic = useAxiosPublic();
  const [campaign, setCampaign] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMoreData(true); // Fetch initial data
  }, []);

  const fetchMoreData = async (reset = false) => {
    const res = await axiosPublic.get(`/campaignAllPeats?page=${page}&limit=10`);
    const data = res.data;

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setCampaign((prevData) => {
        // Combine new data with existing data, avoiding duplicates
        const combinedData = reset ? data : [...prevData, ...data];
        return [...new Map(combinedData.map(item => [item._id, item])).values()];
      });
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div>
      <Banner
        subheading={"Donation Campaign"}
        heading={"You can also help Peats"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum iusto laborum, quae ipsa eum mollitia modi? Dolorum numquam in"
        }
      ></Banner>
      <InfiniteScroll
        dataLength={campaign.length}
        next={() => fetchMoreData()}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>You have seen it all!</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
          {campaign.map((campaign) => (
            <div key={campaign._id}>
              <div className="px-0 border-2 rounded-xl">
                <figure className="w-full bg-cover">
                  <img
                    src={campaign.image}
                    alt="Shoes"
                    className="rounded-t-xl w-full h-64"
                  />
                </figure>
                <div className="card-body space-y-0">
                  <div className="flex justify-between">
                    <h2 className="card-title font-bold">{campaign.name}</h2>
                    <h2 className="font-bold">{campaign.date}</h2>
                  </div>
                  <div>
                    <p>Max Donation Amount: $ {campaign.maxDonation}</p>
                    <p>Donated Amount: $ {campaign.donated_amount}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full my-4">
                      <Link to={`/campaignDetails/${campaign._id}`}>
                        <button className="rounded-md w-full btn overflow-hidden relative group cursor-pointer border-2 font-medium border-[#1e847f] text-[#1e847f] hover:text-white">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CampaignPeats;
