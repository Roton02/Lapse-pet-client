import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AdminCampaign = () => {
  const axiosSecure = useAxiosSecure();

  // Pagination states
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  // Fetching data with React Query
  const { data = [], refetch } = useQuery({
    queryKey: ["Campaign"],
    queryFn: async () => {
      const res = await axiosSecure.get("campaignAllPeats/admin");
      return res.data;
    },
  });

  // Paginate data
  const paginatedData = data.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );
  const pageCount = Math.ceil(data.length / pageSize);

  const handleUnPause = async (id) => {
    await axiosSecure.patch(`/Campaign/Unpause/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("This pet Donation UnPaused successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        refetch();
      }
    });
  };

  const handlePause = async (id) => {
    await axiosSecure.patch(`/Campaign/pause/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("This pet Donation Paused successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
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
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure
          .delete(`/ADmin/campaignAllPeats/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
      </Helmet>
      <div className=" -z-50">
        <h5 className="text-xl mt-5 md:mt-0 md:text-3xl text-center  p-5 ">Total Donation Campaign: {data.length}</h5>
      </div>

     <div className="w-[90vw] md:w-full ">
     <table className="mx-auto  max-w-5xl  overflow-scroll ">
        <thead className="bg-slate-800 text-white">
          <tr className="text-start custom-p">
            <th className="py-2 border-l text-start px-4 text-nowrap border-b">
              No
            </th>
            <th className="py-2 border-l text-start px-4 text-nowrap border-b">
              Pet image
            </th>
            <th className="py-2 border-l text-start px-4 text-nowrap border-b">
              Pet name
            </th>
            <th className="py-2 border-l text-center px-4 text-nowrap border-b">
              User Name
            </th>
            <th className="py-2 border-l m-1 px-4 text-nowrap border-b">
              Pause
            </th>
            <th className="py-2 border-l m-1 px-4 text-nowrap border-b">
              Edit
            </th>
            <th className="py-2 border-l m-1 px-4 text-nowrap border-b">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="">
              <td className="py-2 px-4 border-b  text-start">{index+1}</td>
               <td className="px-4 ">
                <img
                  src={item.image}
                  alt="Pet"
                  className="w-20 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-6 border-b  text-start">{item.name}</td>
              <td className="py-2 px-6 border-b text-center">
                <p className="text-nowrap">{item.userName}</p>
              </td>
             
              <td className="py-2 px-6 border-b text-start">
                {item.pause ? (
                  <button
                    onClick={() => handleUnPause(item._id)}
                    className="btn btn-sm bg-pink-500 px-3 hover:bg-green-500 text-white"
                  >
                    Unpause
                  </button>
                ) : (
                  <button
                    onClick={() => handlePause(item._id)}
                    className="btn btn-sm bg-green-500 hover:bg-pink-500 px-5 text-white"
                  >
                    Pause
                  </button>
                )}
              </td>
              <td className="py-2 px-8 border-b text-start">
                <Link to={`updateCampaignByAdmin/${item._id}`}>
                  <button className="bg-blue-500 btn-sm hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="py-2 px-1 ml-5 border-b text-start">
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
      {/* Pagination Controls */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-7 md:justify-between md:px-12 items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {pageIndex + 1} of {pageCount}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={pageIndex >= pageCount - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCampaign;
