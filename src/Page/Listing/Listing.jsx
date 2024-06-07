import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Listing = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [listingData, setListingData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/allCategory?search=${search}`).then((res) => {
      setListingData(res.data);
      setSelectedData(res.data);
    });
  }, [axiosPublic, search]);
  console.log(selectedData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.serching.value);
  };
  const handleCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form.value);
    const selected = form.value;
    const remainingBySelected = selectedData.filter((s) => s.type === selected);
    console.log(remainingBySelected);
    setListingData(remainingBySelected);
  };
  return (
    <div>
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
                <select
                  onChange={handleCategory}
                  name="category"
                  className="select select-secondary w-full max-w-xs"
                >
                  <option disabled selected value="">
                    Find By Category name
                  </option>
                  <option value="Cat">cats</option>
                  <option value="Dog">Dog</option>
                  <option value="Rabbit">Rabbite</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 flex justify-start">
              <img
                className="w-full"
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
            <div className={`px-0 border-2 rounded-xl bg-cover bg-no-repeat`} style={{backgroundImage: `url(${(list.img) })`}}>
              <div className="card-body pl-8 space-y-0 bg-slate-700 bg-opacity-20 text-white hover:bg-[#ff4880] hover:bg-opacity-50 transition delay-200">
                <div className="border-b-2 flex justify-between ">
                <h2 className="text-3xl font-bold ">{list.name}</h2>
                <h2 className=" font-bold ">{list.date}</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className=""> Age : {list.age} Month</h2>
                </div>

                <p className="">
                 
                  Location : {list.location}
                </p>

                <div className=" font-semibold text-xl mt-5 my-4">
                  <div>
                    <Link to={`/singlePage/${list._id}`}>
                      <button className="  border-b-2 rounded-b-md border-0 ">
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
    </div>
  );
};

export default Listing;