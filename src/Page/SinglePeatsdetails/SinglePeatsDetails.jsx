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
    const requestedData = {id:details._id, AddedEmail:details.addedPerson.AddedPersonEmail,name:details.name, type:details.type,requetsed:true, adopted:details.adopted,age:details.age, date:details.date,description:details.description, img:details.img,location:details.location};
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
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Your request has Recived`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="max-w-[85rem] mx-auto md:p-5 border-2 border-t-0">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4 items-center mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={details.img}
                alt="Image Loading..............."
              />
            </div>
            <div className="lg:col-span-3 space-y-4 ">
            <img
                className="  mx-auto h-1/2 "
                src="https://i.ibb.co/kqWvWh1/images-removebg-preview.png"
                alt=""
              />
             <div className="flex justify-between border-b-2    items-center">
             <h1 className="block  text-2xl font-anton font-bold text-gray-800  md:text-3xl lg:text-4xl dark:text-white">
                {details.name}
              </h1>
              <p className="mr-5 bg-pink-500 px-10   text-lg font-anton font-bold text-white dark:text-neutral-400">
                age : {details.age}
              </p>
             </div>
            
              <p className="py-2 border-b-2 text-lg font-anton text-gray-800 dark:text-neutral-400">
                Date  : {details.date}
              </p>
             
             
              <p className=" border-b-2 text-lg font-anton text-gray-800 dark:text-neutral-400">
                Location : {details.location}
              </p>
              <p className="font-anton border-b-2">{details.description}</p>
              
              <div className="font-anton">{details.description2}</div>

              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-[#ff4880]  text-white hover:text-black  btn-sm px-10 hover:bg-[#fff] "
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
      </div>
    </div>
  );
};

export default SinglePeatsDetails;
