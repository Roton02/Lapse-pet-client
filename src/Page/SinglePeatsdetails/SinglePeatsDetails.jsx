import {  useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const SinglePeatsDetails = () => {
  const params = useParams();
  const { user } = useAuth()
  console.log(params);
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
    const requestedData = details;
    const email = user?.email;
    const name = user?.displayName;
    const numbers = e.target.phone.value;
    const address = e.target.address.value;
    requestedData.RequesterEmail = email;
    requestedData.RequesterName = name;
    requestedData.RequsterAddress = address;
    requestedData.RequsterNumber = numbers;
    // console.log(requestedData);
    axiosPublic.post("/Adopted/request", requestedData).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Your request has accepted`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="max-w-[85rem] mx-auto md:p-5">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={details.img}
                alt="Image Loading..............."
              />
            </div>
            <div className="lg:col-span-3">
              {/* <div className="bg-slate-100 p-5">
                  <h1 className="text-2xl underline font-anton text-center">
                    Donator information -{" "}
                  </h1>
                  <div className="flex gap-5 items-center">
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img src={donator?.image} />
                      </div>
                    </div>
                    <div className="text-sm font-anton">
                      <p>{donator?.name}</p>
                      <p> pickup_location : {pickup_location}</p>
                    </div>
                  </div>
                </div> */}
              <h1 className="block mt-3 ml-2 text-2xl font-anton font-bold text-gray-800  md:text-3xl lg:text-4xl dark:text-white">
                {details.name}
              </h1>
              <p className="mt-3 text-lg font-anton text-gray-800 dark:text-neutral-400">
                age : {details.age}
              </p>
              <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                Date : {details.date}
              </p>
              <p className=" text-lg font-anton text-gray-800 dark:text-neutral-400">
                Location : {details.location}
              </p>
              <p className="font-anton">{details.description}</p>

              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-[#1e847f] text-white hover:bg-[#1e547f] "
                >
                  Adopt
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
                          className="btn px-5 bg-[#1e847f] text-white hover:text-black"
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
      </div>
    </div>
  );
};

export default SinglePeatsDetails;
