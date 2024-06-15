import { Link } from "react-router-dom";

const Category = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 px-4 ">
        {item.map((data) => (
          <Link key={data._id}>
          <div
            
            className=" w-full min-w-96 overflow-hidden shadow-sm dark:bg-gray-800"
          >
            <img
              className="object-cover rounded-xl w-full h-56"
              src={data.img}
              alt="avatar"
            />

            <div className=" space-y-2 p-5">
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
                  <p>Rasied so far</p>
                  <p>Still need
                  </p>
                </div>
              </div>
              <progress
               className="progress progress-secondary w-full" value={data.foundation} max="100"></progress>
               
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
