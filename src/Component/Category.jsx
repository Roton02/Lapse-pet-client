/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Category = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 px-4 items-center ">
        {item.length === 0 ? (
          // Render skeleton loaders while data is loading
          Array(6) // Render 6 skeleton cards (adjust as per your grid layout)
            .fill()
            .map((_, index) => (
              <div key={index} className="w-full min-w-96 overflow-hidden shadow-sm dark:bg-gray-800">
                <Skeleton width={300} height={10} count={5} style={{marginBottom:'7px'}} />
              </div>
            ))
        ) : (
          // Render actual category items
          item.map((data) => (
            <Link key={data._id} to={`/category/${data._id}`}>
              <div className="w-full min-w-96 overflow-hidden shadow-sm dark:bg-gray-800">
                <img
                  className="object-cover rounded-xl w-full h-56"
                  src={data.img}
                  alt="avatar"
                />

                <div className="space-y-2 p-5">
                  <a
                    href="#"
                    className="block text-xl font-bold  dark:text-white text-slate-600 "
                  >
                    {data.description}
                  </a>
                  <p className="text-sm  text-gray-500">
                    {data.description2}
                  </p>

                  <div>
                    <div className="flex justify-between font-bold text-slate-600">
                      <p>$ 20000</p>
                      <p>$ 7500</p>
                      <p>$18000</p>
                    </div>
                    <div className="flex justify-between text-gray-500">
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
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
