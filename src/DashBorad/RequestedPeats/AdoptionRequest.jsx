import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetching data with React Query
  const { data: RequestedPets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`Adopted/request/${user.email}`);
      return res.data;
    },
  });
  console.log(RequestedPets);
  const handleAccept = (_id, id) => {
    console.log(_id, id);
    axiosSecure.patch(`adopted/requestedAccept/${_id}/${id}`).then((res) => {
      console.log("working", res.data);
      refetch();
    });
  };
  const handleCancle = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/Adopted/request/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="-z-50">
      <Helmet>
        <title>Lapse-Pet || Adoption Request</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-10">
        <h2 className="text-4xl text-center">All Requsted Pets</h2>
      </div>
      <section className=" px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium ">Requester Details </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {RequestedPets.length} Request
          </span>
        </div>

        <div className="w-[90vw] md:w-full  ">
          <table className=" divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className=" ">
              <tr className="bg-slate-800  font-bold text-xl text-white  border-l border-white">
                <th
                  scope="col"
                  className=" text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs px-4 border-r font-semibold uppercase tracking-wide ">
                      No
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs ml-6 border-r px-4 font-semibold uppercase tracking-wide ">
                      Name
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="text-start"
                >
                  <div className=" flex items-center gap-x-2 ">
                    <span className="text-xs ml-6 border-r px-4 hidden lg:inline-block font-semibold uppercase tracking-wide ">
                      Email
                    </span>
                  </div>
                </th>

                <th scope="col" className="md:px-3 py-3 hidden md:inline-block  text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs border-r px-4 font-semibold uppercase tracking-wide ">
                      Phone
                    </span>
                  </div>
                </th>
               
                <th scope="col" className="md:px-3  py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs border-r px-4 ml-3 font-semibold uppercase tracking-wide ">
                      Action
                    </span>
                  </div>
                </th>
                <th scope="col" className="md:px-3  py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs border-r px-4 ml-3 font-semibold uppercase tracking-wide ">
                   
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {RequestedPets.map((manage, i) => (
                <tr key={manage._id}>
                  <td className="size-px px-4  py-3 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 ml-2 px-6 pe-6 py-3">
                      <div className="flex items-center  gap-x-3">
                        <div>
                          <span className="block text-sm font-semibold ">
                            {manage.RequesterName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" whitespace-nowrap hidden lg:inline-block">
                    <div className="md:pl-4 lg:py-4">
                      <span className="block text-sm font-semibold ">
                        {manage.RequesterEmail}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap ">
                    <div className="hidden md:inline-block ml-2 pr-6 py-3">{manage.RequsterNumber}</div>
                  </td>
                  
                  <td className="size-px md:px-4 py-1.5 whitespace-nowrap">
                    <button
                      onClick={() => handleAccept(manage._id, manage.id)}
                      className="bg-green-500 btn btn-sm text-white  "
                    >
                      Accept
                    </button>
                  </td>
                  <td className="size-px px-4 py-1.5 whitespace-nowrap">
                    <button
                      onClick={() => handleCancle(manage._id)}
                      className="bg-red-500 btn btn-sm text-white  "
                    >
                      Cancle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdoptionRequest;
