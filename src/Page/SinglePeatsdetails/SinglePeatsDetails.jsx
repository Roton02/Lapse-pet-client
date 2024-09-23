import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { toast } from "react-toastify";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const SinglePeatsDetails = () => {
  const params = useParams();
  const { user } = useAuth();
  console.log(params);
  const [listingData, setListingData] = useState([]);
  const [details, setdetails] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/allCategory/${params.id}`).then((res) => {
      setdetails(res.data);
    });
  }, [axiosPublic, params]);
  console.log(details);
  const handleAdoptionREquest = (e) => {
    e.preventDefault();
    const requestedData = {
      id: details._id,
      AddedEmail: details.addedPerson.AddedPersonEmail,
      name: details.name,
      type: details.type,
      requetsed: true,
      adopted: details.adopted,
      age: details.age,
      date: details.date,
      description: details.description,
      img: details.img,
      location: details.location,
    };
    const email = user?.email;
    const name = user?.displayName;
    const numbers = e.target.phone.value;
    const address = e.target.address.value;
    requestedData.RequesterEmail = email;
    requestedData.RequesterName = name;
    requestedData.RequsterAddress = address;
    requestedData.RequsterNumber = numbers;
    console.log(requestedData);
    axiosPublic.post("/Adopted/request", requestedData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Your request has Recived 😍", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  useEffect(() => {
    const id = document.getElementById("text");
    id.innerHTML = details.description2;
  }, [details.description2]);
  useEffect(() => {
    axiosPublic.get(`/allCategory`).then((res) => {
      setListingData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosPublic]);
  console.log(listingData);

  return (
    <div>
      <div>
        <Helmet>
          <title>Lapse-Pet || Details</title>
          {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
        </Helmet>
        <SectionHeader
          header={"Available pet Details "}
          subHeader={`Dear ${user.displayName} ,  Read the Pet data  properly in details .`}
        ></SectionHeader>
        <div className="max-w-7xl mx-auto  ">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-2/3 md:p-6">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="  flex-1"
              >
                <img className=" w-full " src={details.img} />
              </div>
              <div className="">
                <SectionTitle
                  month={"month"}
                  heading={details.name}
                  subHeading={details.age}
                ></SectionTitle>

                <p className="py-2  text-lg font-anton "></p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" font-semibold  "
                >
                  Location : {details.location}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="font-anton border-b-2 my-2"
                >
                  {details.description}
                </p>

                <div id="text"></div>

                <div className="flex justify-between items-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="flex items-center gap-3 w-full mt-6 sm:w-auto"
                  >
                    <div className="avatar ">
                      <div className="w-16 rounded-full">
                        <img
                          src={details?.addedPerson?.AddedPersonImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="">
                      <h1 className="font-bold text-xl mt-5">
                        {details?.addedPerson?.AddedPersonName}
                      </h1>
                      <p className="text-sm">{details.date}</p>
                    </div>
                  </div>
                  <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
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
                          Adopt
                        </span>
                        <span className="relative invisible">Adopt</span>
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
                                  <img src={details.img} />
                                </div>
                              </div>
                              <div className="text-xl font-anton">
                                <p>{details.name}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-5">
                            <div>
                              <label htmlFor="FoodName"> Name</label> <br />
                              <input
                                name="name"
                                type="text"
                                required
                                value={user?.displayName}
                                placeholder="Write Food Name"
                                className="input input-bordered w-full"
                              />
                            </div>
                            <div>
                              <label htmlFor="FoodName">Email</label> <br />
                              <input
                                name="image"
                                type="text"
                                required
                                value={user?.email}
                                placeholder="Write Valid URL"
                                className="input input-bordered w-full"
                              />
                            </div>
                          </div>
                          <div className="">
                            <div>
                              <label htmlFor="Phone">Phone</label> <br />
                              <input
                                name="phone"
                                type="number"
                                required
                                placeholder="write your Number"
                                className="input input-bordered w-full"
                              />
                            </div>
                            <div>
                              <label htmlFor="expired">Address</label> <br />
                              <input
                                name="address"
                                type="text"
                                required
                                placeholder="write Recived address"
                                className="input input-bordered w-full"
                              />
                            </div>
                          </div>

                          <div className="flex justify-center my-5">
                            <button
                              type="submit"
                              className="btn px-5 bg-[#ff4880] text-white hover:text-black"
                            >
                              submit
                            </button>
                          </div>
                        </form>
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
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="md:w-1/3"
            >
              <div className="p-2">
                <div>
                  <h2 className="text-2xl font-semibold">Mine</h2>
                  <Link to="/dashboard/myAddedPeats">
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
                        My Added Pets
                      </span>
                      <span className="relative invisible">My Added Pets</span>
                    </a>
                  </Link>
                  <Link to="/dashboard/adoptionRequest">
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
                        Pending Request
                      </span>
                      <span className="relative invisible">
                        Pending Request
                      </span>
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
                      {listingData.slice(5, 8).map((list) => (
                        <Link key={list._id} to={`/singlePage/${list._id}`}>
                          <div className=" w-full ">
                            <a
                              href="#"
                              className="w-full  h-60 group relative block bg-black"
                            >
                              <img
                                alt="Something is wrong"
                                src={list.img}
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
                                      {list.description}
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

export default SinglePeatsDetails;
