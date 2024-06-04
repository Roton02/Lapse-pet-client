import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // Fetching data with React Query
  const { data: RequestedPets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosPublic.get(`Adopted/request/${user.email}`
      );
      return res.data;
    },
  });
  console.log(RequestedPets);
  const handleAccept =(id)=>{
    console.log(id);
    axiosPublic.patch(`adopted/requestedAccept/${id}`)
    .then(res=>{
      console.log(res.data);
    })
  }
  const handleCancle =(id)=>{
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
        axiosPublic.delete(`/Adopted/request/${id}`).then((res) => {
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
  }

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Requester Details{" "}
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {RequestedPets.length} Request
          </span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-50 dark:bg-neutral-800">
              <tr>
                <th
                  scope="col"
                  className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs ml-6 font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      No
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs ml-6 font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Name
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs ml-6 font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Email
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-3 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Phone
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Location
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Action
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {RequestedPets.map((manage, i) => (
                <tr key={manage._id}>
                  <td className="size-px px-6 py-3 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 px-6 pe-6 py-3">
                      <div className="flex items-center  gap-x-3">
                        <div>
                          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            {manage.RequesterName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap">
                    <div className="pl-6 py-3">
                      <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                        {manage.RequesterEmail}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className=" pr-6 py-3">{manage.RequsterNumber}</div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    {manage.RequsterAddress}
                  </td>
                  <td className="size-px px-6 py-1.5 whitespace-nowrap">
                  <button
                    onClick={() => handleAccept(manage._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Accept
                  </button>
                  </td>
                  <td className="size-px px-6 py-1.5 whitespace-nowrap">
                  <button
                    onClick={() => handleCancle(manage._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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
