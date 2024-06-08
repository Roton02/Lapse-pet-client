import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AdminCampaign = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // Fetching data with React Query
  const { data = [], refetch } = useQuery({
    queryKey: ["Campaign"],
    queryFn: async () => {
      const res = await axiosPublic.get('campaignAllPeats');
      console.log(res.data);
      return res.data;
    },
  });
  const handleUnPause =async(id)=>{
    console.log(id);
  }

  const handlePause =async (id) =>{
    // console.log(id);
    await axiosPublic.patch(`/Campaign/pause/${id}`)
    .then(res => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success('This pet Donation Paused successful', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          refetch()
      }
    })

  }

  const calculateProgress = (current, max) => {
    return (current / max) * 100;
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Maximum Donation </th>
            <th className="py-2 px-4 border-b">Donated</th>
            <th className="py-2 px-4 border-b">Pause</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">Delete</th>
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
               {
                item.pause ? <button 
                onClick={()=>handleUnPause(item._id)}
                className="bg-pink-500  text-white font-bold py-1 px-4 rounded">
                  unpaused
                </button>:
                <button 
                onClick={()=>handlePause(item._id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded">
                  Pause
                </button>
               }
              </td>
              <td className="py-2 px-4 border-b text-center">
                <Link to={`updateCampaign/${item._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 px-1 border-b text-center">
                
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                   className="bg-red-500 text-white font-bold py-1 px-4 rounded"
                >
                  Delete
                </button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCampaign;