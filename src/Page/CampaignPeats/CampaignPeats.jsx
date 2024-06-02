import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import { ImLocation2 } from "react-icons/im";
import { MdTimeline } from "react-icons/md";

const CampaignPeats = () => {
  const axiosPublic = useAxiosPublic();
  const [campaign, setCampaign] = useState([]);
  useEffect(() => {
    axiosPublic.get("/campaignAllPeats").then((res) => {
      console.log(res.data);
      setCampaign(res.data);
    });
  }, [axiosPublic]);
  return (
    <div>
      <Banner
        subheading={"Donation Campaign"}
        heading={"YOu can also help Peats "}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum iusto laborum, quae ipsa eum mollitia modi? Dolorum numquam in"
        }
      ></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
        {campaign.map((campaign) => (
          <div key={campaign._id}>
            <div className=" px-0 border-2 rounded-xl ">
              <figure className=" ">
                <img
                  src={campaign.img}
                  alt="Shoes"
                  className="rounded-t-xl w-full h-64"
                />
              </figure>
              <div className="card-body space-y-0 ">
                <h2 className="card-title font-bold">{campaign.name}</h2>
                <div className="">
                  <p> Max Donation Amount : $ {campaign.max_donation_amount}</p>
                  <p> Donated Amount : $ {campaign.donated_amount}</p>
                </div>

                <div className="flex justify-center">
                  <div className=" w-full my-4 ">
                    <Link to={`/campaignDetails/${campaign._id}`}>
                      <button className="rounded-md w-full  btn   overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
                        view Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPeats;
