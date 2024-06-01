import Swal from "sweetalert2";
import usePeatCategory from "../../Hooks/usePeatCategory";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Listing = () => {
  const axiosPublic = useAxiosPublic();
  const [listingData, setListingData] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/allCategory`).then((res) => {
      setListingData(res.data);
    });
  }, [axiosPublic]);
  console.log(listingData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.serching.value);
   
  };
  const handleCategory = (chosen) =>{
    console.log(chosen.value);
  }
  return (
    <div>
      {/* <header>
        <div
          className={`max-w-7xl h-[550px]  mx-auto rounded-md bg-center  bg-cover
           bg-[#9cd3d8]`}
        >
          <div className=" flex flex-col lg:flex-row items-center justify-start lg:ml-14  h-full ">
            <div className="text-start lg:ml-14 w-1/2">
              {subheading && (
                <h1 className="text-xl  w-full lg:w-72  lg:mb-10 font-semibold text-[#ff4880] bg-white rounded-lg p-5  lg:text-2xl">
                  {subheading}
                </h1>
              )}
              {heading && (
                <h1 className="text-3xl font-bold  lg:my-10  text-[#393d72] lg:text-5xl">
                  {heading}
                </h1>
              )}
              {btn && <p className="text-[#393d72]">{description}</p>}
              {btn && (
                <button className="w-full px-5 py-2 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform bg-[#ff4880] rounded-md lg:w-auto hover:bg-pink-500 focus:outline-none focus:bg-[#ff4880]">
                  {btn}
                </button>
              )}
            </div>
            <div className="w-1/2">
              <img className="w-full"
                src="https://i.ibb.co/CHK1q5V/pets-3715733-640-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </header> */}
      <header>
        <div
         className={`max-w-7xl h-[550px]  mx-auto rounded-md bg-center  bg-cover
         bg-[#9cd3d8]`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-16 items-center justify-start   h-full">
          <div className="flex w-[550px] items-center justify-start   h-full ">
            <div className="text-start ">
              <h1 className="text-5xl font-bold mb-5 text-[#393d72] ">
                Here are all un donated Peats.
              </h1>
              <p>You can find peats and also can adopted peats</p>
              <form onSubmit={handleSubmit}>
                <div className="relative z-10 flex  space-x-2  py-5  rounded-lg  text-neutral-200">
                  <div className="flex-1 ">
                    <input
                      type="text"
                      name="serching"
                      className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-neutral-900 dark:border-transparent text-neutral-400 placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Search by peat Name And get the peat details !"
                    />
                  </div>

                  <div className="flex-[0_0_auto] ">
                    <button
                      type="submit"
                      className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg
                        className="flex-shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              <form onChange={handleCategory}>
              <select name="category" className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Find By Category name
                </option>
                <option>cats</option>
                <option>Dog</option>
                <option>Rabbite</option>
              </select>
              </form>
            </div>
          </div>
          <div className="w-1/2 flex justify-start">
              <img className="w-full"
                src="https://i.ibb.co/CHK1q5V/pets-3715733-640-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {listingData.map((list) => (
          <div key={list._id}>
            <div className=" px-0 border-2 rounded-xl ">
              <figure className=" ">
                <img
                  src={list.img}
                  alt="Shoes"
                  className="rounded-t-xl w-full h-64"
                />
              </figure>
              <div className="card-body space-y-0 ">
                <h2 className="card-title font-bold">{list.name}</h2>
                <p>{list.shortdescription}</p>
                <p className="flex items-center gap-5">
                  {" "}
                  <ImLocation2 />
                  {list.location}
                </p>

                <div className="flex justify-between">
                  <div className=" mt-12 ">
                    <Link to={`/singlePage/${list._id}`}>
                      <button className="rounded-md  btn   overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
                          View Details
                        </span>
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

export default Listing;
