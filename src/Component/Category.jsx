/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   items-center ">
        {item.length === 0
          ? // Render skeleton loaders while data is loading
            Array(6) // Render 6 skeleton cards (adjust as per your grid layout)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full  overflow-hidden shadow-sm dark:bg-gray-800"
                >
                  <Skeleton
                    width={300}
                    height={10}
                    count={5}
                    style={{ marginBottom: "7px" }}
                  />
                </div>
              ))
          : // Render actual category items
            item.map((data) => (
              <Link  key={data._id} to={`/listing`}>
                <div data-aos="fade-up"
                  data-aos-duration="2000" className="w-full  overflow-hidden shadow-sm hover:scale-105 transition delay-100 ">
                  <img
                    className="object-cover rounded-xl w-full h-56"
                    src={data.img}
                    alt="avatar"
                  />
                  <div className="space-y-2 p-1">
                    <a href="#" className="block text-xl font-bold  ">
                      {data.description} 
                    </a>
                    <p  className="text-sm   ">{data.description2.slice(0,80)}  <span className="text-secondary font-medium">see All</span></p>

                    <div>
                      <div className="flex justify-between font-bold ">
                        <p>$ 20000</p>
                        <p>$ 7500</p>
                        <p>$18000</p>
                      </div>
                      <div className="flex justify-between ">
                        <p>Target Amount</p>
                        <p>Raised so far</p>
                        <p>Still need</p>
                      </div>
                    </div>
                    <progress
                      className="progress progress-secondary w-full"
                      value={data.foundation}
                      max="100"
                    ></progress>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Category;
