import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyDonationCampaign = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // Fetching data with React Query
  const { data = [], refetch } = useQuery({
    queryKey: ["Campaign"],
    queryFn: async () => {
      const res = await axiosPublic.get(`myAddedCampaign/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const calculateProgress = (current, max) => {
    return (current / max) * 100;
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Maximum Donation Amount</th>
            <th className="py-2 px-4 border-b">Donation Progress</th>
            <th className="py-2 px-4 border-b">Pause</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">View Donators</th>
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
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded">
                  Pause
                </button>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <Link to={`updateCampaign/${item._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                  View Donators
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDonationCampaign;
