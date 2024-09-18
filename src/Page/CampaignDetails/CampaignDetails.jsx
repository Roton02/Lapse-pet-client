import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import Payment from "../../Component/Payment";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

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
      <Helmet>
        <title>Lapse-Pet || Campaign Details</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div>
        <div className="max-w-7xl mx-auto ">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-2/3 md:p-6">
              <div className="  flex-1">
                <img
                  className=" w-full max-h-[700px] "
                  src={details.image}
                  alt="Image Loading..............."
                />
              </div>
              <div className="">
                <SectionTitle
                  heading={details.name}
                  subHeading={`Current Donations  ${details.donatedAmount} $`}
                ></SectionTitle>

                <p className="py-2  text-lg font-anton "></p>

                <p className=" font-semibold  ">
                  maxDonation : {details.maxDonation} $
                </p>
                <p className="font-anton border-b-2 my-2">
                  {details.sortDescription}
                </p>

                <p className="font-anton border-b-2 my-2">
                  {details.longDescription}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                    <div className="avatar ">
                      <div className="w-16 rounded-full">
                        <img src={details?.userPhoto} alt="" />
                      </div>
                    </div>
                    <div className="">
                      <h1 className="font-bold text-xl mt-5">
                        {details?.userName}
                      </h1>
                      <p className="text-sm">{details.date}</p>
                    </div>
                  </div>
                  <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <button
                      onClick={() => {
                        document.getElementById("my_modal_5").showModal();
                        setRecomended(true);
                      }}
                      className=""
                    >
                      <a
                        href="#_"
                        className="relative border-2 w-40 rounded-l-lg  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-500 transition duration-300 ease-out  border-pink-500 shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
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
                        <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Donate
                        </span>
                        <span className="relative invisible">Donate</span>
                      </a>
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
                        <Payment
                          pause={details.pause}
                          id={details._id}
                        ></Payment>
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
              {recomended && (
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-2xl font-bold flex justify-center py-5 ">
                    Recomended For Donate{" "}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2   gap-10 mt-2">
                    {recomendedData.slice(0, 2).map((campaign) => (
                      <div key={campaign._id} className="">
                        <div className="px-0 border   bg-gray-100  shadow-2xl hover:scale-105">
                          <figure className="w-full bg-cover">
                            <img
                              src={campaign.image}
                              alt="No uploaded any image"
                              className="rounded-t-sm h-80 rounded-br-full rounded-tr-full bg-cover w-full "
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
            <div className="md:w-1/3">
              <div className="p-2">
                <div>
                  <h2 className="text-2xl font-semibold">Mine</h2>
                  <Link to="/dashboard/myDonationCampaign">
                    <a
                      href="#_"
                      className="relative rounded-tl-xl border-2  w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-500 transition duration-300 ease-out  border-pink-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
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
                      <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        My Campaign List
                      </span>
                      <span className="relative invisible">
                        My Campaign List
                      </span>
                    </a>
                  </Link>
                  <Link to="/dashboard/myDonation">
                    <a
                      href="#_"
                      className="relative rounded-bl-xl  border-2  w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-500 transition duration-300 ease-out  border-pink-500 shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
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
                      <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        My Donation
                      </span>
                      <span className="relative invisible">My Donation</span>
                    </a>
                  </Link>
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl mb-3 font-semibold"> Find On Us </h2>
                  <div>
                    <a
                      href="http://facebook.com/roton.choudury"
                      target="_blank"
                    >
                      <h1 className="w-full border-2 flex  p-4 rounded-t-lg ">
                        <a
                          className="bg-gray-200 p-2 mr-3 rounded-full"
                          href=""
                          target="_blank"
                        >
                          <FaFacebook></FaFacebook>
                        </a>
                        Facebook
                      </h1>
                    </a>
                    <a href="https://x.com/MdSanaulla75762" target="_blank">
                      <h1 className="w-full border-x-2 flex p-4  ">
                        <a
                          className="bg-gray-200 p-2 mr-3 rounded-full"
                          href="https://x.com/MdSanaulla75762"
                          target="_blank"
                        >
                          <FaTwitter></FaTwitter>
                        </a>
                        Tiwtter
                      </h1>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-sana-ullah12/"
                      target="_blank"
                    >
                      <h1 className="w-full border-2  flex p-4 rounded-b-lg ">
                        <a
                          className="bg-gray-200 p-2 mr-3 rounded-full"
                          href="https://www.linkedin.com/in/md-sana-ullah12/"
                          target="_blank"
                        >
                          <FaLinkedin></FaLinkedin>
                        </a>
                        linked in
                      </h1>
                    </a>
                  </div>
                  <div className="bg-base-300 mt-4 p-4 space-y-3">
                    <h2 className="text-2xl font-semibold"> Q-Zone</h2>
                    <div className="grid grid-cols-1 gap-y-5">
                      {recomendedData.slice(5, 8).map((list) => (
                        <Link
                          key={list._id}
                          to={`/campaignDetails/${list._id}`}
                        >
                          <div className=" w-full ">
                            <a
                              href="#"
                              className="w-full  h-60 group relative block bg-black"
                            >
                              <img
                                alt="Something is wrong"
                                src={list.image}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                              />
                              <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                  {list.date}
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">
                                  {list.name}
                                </p>

                                <div className="mt-20">
                                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                      {list.sortDescription}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" bg-[url('https://i.ibb.co/yyFpL27/dog-5482171-640.jpg')] text-white ">
                  <div className="bg-black opacity-65 p-5">
                    <h1 className="text-4xl font-bold mb-5">
                      Join Our New Pet Adoption Campaign!
                    </h1>
                    <p className="mb-5">
                      Help us find loving homes for adorable pets in need. Your
                      support can make a difference in their lives. Adopt,
                      donate, or volunteer today and be a hero for these
                      wonderful animals.
                    </p>
                    <div className="z-50">
                      <Link to="/dashboard/CreateCampaign">
                        <a
                          href="#_"
                          className="relative border-2   inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-500 transition duration-300 ease-out  border-pink-500 shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
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
                          <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Create an Campaign
                          </span>
                          <span className="relative invisible">
                            Create an Campaign
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
