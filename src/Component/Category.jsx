import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10  ">
        {item.map((data) => (
          <Link key={data._id}>
          <div
            
            className=" w-full overflow-hidden bg-gray-200 shadow-sm dark:bg-gray-800"
          >
            <img
              className="object-cover w-full h-56"
              src={data.img}
              alt="avatar"
            />

            <div className="py-5 space-y-4  text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                role="link"
              >
                {data.name}
              </a>
              <p className="text-sm px-10 text-gray-700 dark:text-gray-200">
                {data.description}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
