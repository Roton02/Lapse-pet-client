import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import Payment from "../../Component/Payment";

const CampaignDetails = () => {
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
    const paymentDetails = details;
    paymentDetails.PaymentAuthorEmail = user?.email;
    paymentDetails.PaymentAuthorName = user?.displayName;
   console.log(paymentDetails);
  };

  return (
    <div>
      <div>
        <div className="max-w-[85rem] mx-auto md:p-5">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={details.image}
                alt="Image Loading..............."
              />
            </div>
            <div className="lg:col-span-3">
              <h1 className="block mt-3 ml-2 text-2xl font-anton font-bold text-gray-800  md:text-3xl lg:text-4xl dark:text-white">
                {details.name}
              </h1>
              <p className="mt-3 text-lg font-anton text-gray-800 dark:text-neutral-400">
                age : {details.age}
              </p>
              <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                Last Date Donation : {details.date}
              </p>
              <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                Note : {details.sortDescription}
              </p>
              <p className="font-anton">{details.longDescription}</p>

              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-[#1e847f] text-white hover:bg-[#1e547f] "
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
                      <div className="flex gap-5">
                      </div>
                      <div className="">
                        <div>
                          <label htmlFor="DonateAmount">Donate Amount</label> <br />
                          <input
                            name="DonateAmount"
                            type="text"
                            required
                            placeholder="write Donate Amount"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                     

                      <div className="flex justify-center my-5">
                        <button
                        disabled={details.pause}
                          type="submit"
                          className="btn px-5 bg-[#1e847f] text-white hover:text-black"
                        >
                          Donate
                        </button>
                      </div>
                    </form>
                    <Payment></Payment>
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
    </div>
  );
};

export default CampaignDetails;
