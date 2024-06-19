import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import Payment from "../../Component/Payment";

const CampaignDetails = () => {
  const [recomended, setRecomended] = useState(false);
  const [recomendedData, setRecomendedData] = useState([]);

  const params = useParams();
  const { user } = useContext(AuthContext);
  console.log(params);
  const [details, setdetails] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/campaignAllPeats/${params.id}`).then((res) => {
      setdetails(res.data);
    });
  }, [axiosPublic, params]);
  console.log(details);
  const handleAdoptionREquest = (e) => {
    e.preventDefault();
    setRecomended(true);
    const paymentDetails = details;
    paymentDetails.PaymentAuthorEmail = user?.email;
    paymentDetails.PaymentAuthorName = user?.displayName;
    console.log(paymentDetails);
  };
  useEffect(() => {
    axiosPublic.get("/campaignAllPeats").then((res) => {
      console.log(res.data);
      setRecomendedData(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="max-w-[85rem] mx-auto md:p-5 border-2 border-t-0">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={details.image}
                alt="Image Loading..............."
              />
            </div>
            <div className="lg:col-span-3">
              <img
                className="  mx-auto h-1/2 "
                src="https://i.ibb.co/kqWvWh1/images-removebg-preview.png"
                alt=""
              />
              <h1 className="block  mb-2  text-xl font-anton font-bold    dark:text-white">
                <span className="text-xl font-bold"> Name :</span>{" "}
                {details.name}
              </h1>
              <hr />
              <p className=" text-sm font-anton py-3  dark:text-neutral-400">
                {details.sortDescription}
              </p>
              <hr />
              <p className=" text-xl font-anton  dark:text-neutral-400">
                Last Date of Donation : {details.date}
              </p>

              <p className="font-anton text-sm py-3">
                {details.longDescription}
              </p>

              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={() => {
                    document.getElementById("my_modal_5").showModal();
                    setRecomended(true);
                  }}
                  className="btn bg-[#ff4880] text-white hover:text-black btn-sm"
                >
                  Donate Now
                </button> 

                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box relative">
                    <form onSubmit={handleAdoptionREquest}>
                      <div className="bg-slate-100 p-5">
                        <h1 className="text-2xl underline font-anton text-center">
                          Peat Information -{" "}
                        </h1>
                        <div className="flex my-4 justify-center gap-5 items-center">
                          <div className="avatar">
                            <div className="w-16 rounded">
                              <img src={details.image} />
                            </div>
                          </div>
                          <div className="text-xl font-anton">
                            <p>{details.name}</p>
                          </div>
                        </div>
                      </div>
                    </form>
                    <Payment pause={details.pause} id={details._id}></Payment>
                    <div
                      className="modal-action absolute
                                  top-0 right-6
                                  flex justify-center"
                    >
                      <form method="dialog">
                        <button type="submit" className="btn ">
                          X
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      {recomended && (
        <div>
          <h1 className="text-2xl font-bold flex justify-center py-5 ">
            Recomended For Donate{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-2">
            {recomendedData.slice(0, 3).map((campaign) => (
              <div key={campaign._id}>
                <div className="px-0 border  bg-[#fbebe2] rounded-xl">
                  <figure className="w-full bg-cover">
                    <img
                      src={campaign.image}
                      alt="No uploaded any image"
                      className="rounded-t-xl min-h-28 rounded-br-full bg-cover w-full "
                    />
                  </figure>
                  <div className="px-5">
                    <div className="flex justify-between">
                      <h2 className="card-title font-bold text-2xl">
                        {campaign.name}
                      </h2>
                      <h2 className="font-bold">{campaign.date}</h2>
                    </div>
                    <div className="text-sm font-bold text-gray-500 ">
                      <p>Max Donate: $ {campaign.maxDonation}</p>
                      <p>Donated : $ {campaign.donated_amount}</p>
                    </div>

                    <div className="w-full flex justify-end my-2 mb-3">
                      <Link to={`/campaignDetails/${campaign._id}`}>
                        <button className="rounded-md  btn-sm btn overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#ff4880] hover:text-black">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;
