import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Maximum Donation</th>
            <th className="py-2 px-4 border-b">Donated</th>
            <th className="py-2 px-4 border-b">Pause</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">View Donators</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{item.name}</td>
              <td className="py-2 px-4 border-b text-center">${item.maxDonation}</td>
              <td className="py-2 px-4 border-b text-center">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                    <div
                      style={{ width: `${calculateProgress(item.donatedAmount, item.maxDonation)}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                    ></div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 border-b text-center">
                {item.pause ? (
                  <button>Already Paused</button>
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
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                  onClick={() => document.getElementById(`my_modal_${index}`).showModal()}
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
                    <h3 className="font-bold text-lg">Your Campaign Donator List!</h3>
                    <div>
                      {item.donators && item.donators.length > 0 ? (
                        item.donators.map((d, i) => (
                          <div className="p-2 my-2  bg-pink-200 rounded-xl" key={i}>
        
                            <div>
                            <p className="text-xl font-semibold">{d.name}</p>
                            <h4>{d.email}</h4>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="mt-5 text-red-600 font-bold">There are no donators</p>
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
  );
};

export default MyDonationCampaign;
