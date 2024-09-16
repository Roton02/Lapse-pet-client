import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AdminCampaign = () => {
  const axiosSecure = useAxiosSecure();
  // Fetching data with React Query
  const { data = [], refetch } = useQuery({
    queryKey: ["Campaign"],
    queryFn: async () => {
      const res = await axiosSecure.get("campaignAllPeats/admin");
      console.log(res.data);
      return res.data;
    },
  });
  const handleUnPause = async (id) => {
    await axiosSecure.patch(`/Campaign/Unpause/${id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("This pet Donation UnPaused successful", {
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

  const handlePause = async (id) => {
    // console.log(id);
    await axiosSecure.patch(`/Campaign/pause/${id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("This pet Donation Paused successful", {
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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure
          .delete(`/ADmin/campaignAllPeats/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
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
    <div className=" mx-auto p-4 -z-50">
      <Helmet>
        <title>Lapse-Peat || Admin Campaign</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-10">
        <h2 className="text-4xl text-center"> All Donation Campaign </h2>
      </div>

      <table className="mx-auto">
        <thead>
          <tr className="text-start">
            <th className="py-2 text-start px-4 text-nowrap border-b">Pet Name</th>
            <th className="py-2 text-start px-4 text-nowrap border-b">User Name</th>
            <th className="py-2  m-1 px-4 text-nowrap border-b">Pause</th>
            <th className="py-2  m-1 px-4 text-nowrap border-b">Edit</th>
            <th className="py-2  m-1 px-4 text-nowrap border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b  text-start">{item.name}</td>
              <td className="py-2 px-4 border-b text-start">
                <p className="text-nowrap">{item.userName}</p>
              </td>
              
              <td className="py-2 px-4 border-b text-start">
                {item.pause ? (
                  <button onClick={() => handleUnPause(item._id)} className="btn btn-sm bg-pink-500 px-3 hover:bg-green-500 text-white">
                    unpause
                  </button>
                ) : (
                  <button onClick={() => handlePause(item._id)} className="btn btn-sm bg-green-500 hover:bg-pink-500 px-5 text-white">
                   Pause
                  </button>
                )}
              </td>
              <td className="py-2 px-4 border-b text-start">
                <Link to={`updateCampaignByAdmin/${item._id}`}>
                  <button className="bg-blue-500 btn-sm hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 px-1 border-b text-start">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 btn-sm text-white font-bold py-1 px-4 rounded"
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
