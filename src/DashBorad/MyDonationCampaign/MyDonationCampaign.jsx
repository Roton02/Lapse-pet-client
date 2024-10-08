import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyDonationCampaign = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetching data with React Query
  const { data = [], refetch } = useQuery({
    queryKey: ["Campaign"],
    queryFn: async () => {
      const res = await axiosSecure.get(`myAddedCampaign/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handlePause = async (id) => {
    await axiosSecure.patch(`/Campaign/pause/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("This pet Donation Paused successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        refetch();
      }
    });
  };

  const calculateProgress = (current, max) => {
    return (current / max) * 100;
  };

  return (
    <div className=" mx-auto p-4 ">
      <Helmet>
        <title>Lapse-Pet || My Campaign</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-10">
        <h2 className="text-4xl text-center">My Donation Campaign</h2>
      </div>
      <div className="w-[90vw] md:w-full ">
        <table className="mx-auto">
          <thead>
            <tr className="bg-slate-800   text-white  border-l border-white">
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                Pet Name
              </th>
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                Maximum Donation
              </th>
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                Donated
              </th>
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                Pause
              </th>
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                Edit
              </th>
              <th className="py-2 px-4 border-r text-[14px] text-nowrap border-b">
                View Donators
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">
                  ${item.maxDonation}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                      <div
                        style={{
                          width: `${calculateProgress(
                            item.donatedAmount,
                            item.maxDonation
                          )}%`,
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {item.pause ? (
                    <button className="text-nowrap">Already Paused</button>
                  ) : (
                    <button
                      onClick={() => handlePause(item._id)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded"
                    >
                      Pause
                    </button>
                  )}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <Link to={`updateCampaign/${item._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="py-2 px-1 border-b text-center">
                  <button
                    className="bg-green-500 text-nowrap hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    View Donators
                  </button>
                  <dialog id={`my_modal_${index}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">
                        Your Campaign Donator List!
                      </h3>
                      <div>
                        {item.donators && item.donators.length > 0 ? (
                          item.donators.map((d, i) => (
                            <div
                              className="p-2 my-2  bg-white rounded-xl"
                              key={i}
                            >
                              <div className="text-start text-black ml-5">
                                <h1 className="text-xl font-semibold">
                                  {d.name}
                                </h1>
                                <h4>{d.email}</h4>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="mt-5 text-nowrap text-red-600 font-bold">
                            There are no donators
                          </p>
                        )}
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonationCampaign;
