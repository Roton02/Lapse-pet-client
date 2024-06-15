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
          className={`max-w-7xl h-[200px]  mx-auto rounded-b-md bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]
         `}
        >
          <div className="">
            <h1 className="text-4xl pt-5 text-center  font-bold mb-5 text-[#393d72] ">
              ----Adoption Search----
            </h1>
            <p className="w-36 border-b-4 border-[#393d72] mx-auto"> </p>
            <p className="text-center py-3">
              You can find peats and also can adopted peats
            </p>
          </div>
        </div>
      </header>
      <div className="md:px-32 p-5 rounded-3xl  w-full border
       mt-1 bg-slate-50  flex flex-col lg:flex-row items-center justify-between ">
        <form onSubmit={handleSubmit}>
          <div className="relative z-10 flex  space-x-2  py-5  rounded-lg  text-neutral-200">
            <div className="">
              <input
                type="text"
                name="serching"
                className="py-2.5 md:w-96 px-4 block  border-transparent rounded-lg bg-white border border-gray-600 text-black"
                placeholder="Search by peat Name And get the peat details !"
              />
            </div>

            <div className="flex-[0_0_auto] ">
              <button
                type="submit"
                className="size-[46px] text-sm md:w-52 w-20 inline-flex justify-center items-center gap-x-2  font-semibold rounded-lg border border-transparent  text-white  bg-[#ff4880] disabled:opacity-50 disabled:pointer-events-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="w-52">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {listingData.map((list) => (
          <div key={list._id}>
            <div
              className={`px-0 border-2 rounded-xl bg-cover bg-no-repeat`}
              style={{ backgroundImage: `url(${list.img})` }}
            >
              <div className="card-body pl-8 space-y-0 bg-slate-700 bg-opacity-20 text-white hover:bg-[#ff4880] hover:bg-opacity-50 transition delay-200">
                <div className="border-b-2 flex justify-between ">
                  <h2 className="text-3xl font-bold ">{list.name}</h2>
                  <h2 className=" font-bold ">{list.date}</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className=""> Age : {list.age} Month</h2>
                </div>

                <p className="">Location : {list.location}</p>

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
