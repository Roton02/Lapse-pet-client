import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AdminAllPets = () => {
  const axiosSecure = useAxiosSecure();

  // Fetching data with React Query
  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCategory/admin");
      return res.data;
    },
  });
  console.log(pets);
  const columns = useMemo(
    () => [
      {
        accessorKey: "serialNumber",
        header: "No",
        cell: (info) => info.row.index + 1,
      },
      {
        accessorKey: "img",
        header: "Image",
        cell: ({ getValue }) => (
          <img src={getValue()} alt="Pet" className="w-12 h-12 object-cover" />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "type",
        header: "Category",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (row.original.adopted ? "Adopted" : "Available"),
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="space-x-2">
            <button
              onClick={() => handleUpdate(row.original._id)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(row.original._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ),
      },
      {
        accessorKey: "Change Status",
        header: "Change status",
        cell: ({ row }) => (
          <div className="space-x-2">
            <button
              onClick={() => handleChangeStatusByAdopted(row.original._id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Adopted
            </button>
            <button
              onClick={() => handleChangeStatusByNotAdopted(row.original._id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Not Adopted
            </button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleUpdate = (_id) => {
    console.log(`Update pet with ID: ${_id}`);
  };

  const handleDelete = async (_id) => {
    console.log(`Delete pet with ID: ${_id}`);
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
        axiosSecure.delete(`allcategory/admin/delete/${_id}`).then((res) => {
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
  const handleChangeStatusByNotAdopted = async (id) => {
    await axiosSecure
      .patch(`/AdminChangeStatusByNotAdopted/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("pet  status changed by Not Adopted", {
            position: "top-center",
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
  const handleChangeStatusByAdopted = async (id) => {
    await axiosSecure.patch(`/AdminChangeStatusByAdopted/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("pet  status changed by Adopted", {
          position: "top-center",
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

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data: pets,
    columns,
    pageCount: Math.ceil(pets.length / pageSize),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  const paginatedData = useMemo(() => {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return pets.slice(start, end);
  }, [pets, pageIndex, pageSize]);

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <Helmet>
        <title>Lapse-Peat || Admin All Peats</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h1 className="text-4xl text-center font-bold mt-5  lg:mt-0 mb-4">All Pets</h1>
      <table className="table max-w-5xl mx-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className=" border-b border-gray-300"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-4 text-left text-sm font-medium"
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={row._id} className="border-b border-gray-300">
              <td className="p-4 text-sm ">
                {i + 1 + pageIndex * pageSize}
              </td>
              <td className="p-4 text-sm ">
                <img
                  src={row.img}
                  alt="Pet"
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="p-4 text-sm ">{row.name}</td>
              <td className="p-4 text-sm ">{row.type}</td>
              <td className="p-4 text-sm ">
                {row.adopted ? (
                  <button disabled className="bg-green-300 text-nowrap px-1 block">
                    AllReady Adopted
                  </button>
                ) : (
                  <button disabled className="to-blue-300 btn-block text-nowrap  px-1">
                    {" "}
                    Not Adopted
                  </button>
                )}
              </td>
              <td className="p-4 text-sm ">
                <div className="space-x-2 flex">
                  <Link to={`updatepets/${row._id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
              <td className="p-4 text-sm ">
                <div className="space-x-2 flex">
                  <button
                    onClick={() => handleChangeStatusByNotAdopted(row._id)}
                    className="block text-nowrap bg-emerald-950 text-white px-2 py-1 rounded"
                  >
                    Not Adopted
                  </button>

                  <button
                    onClick={() => handleChangeStatusByAdopted(row._id)}
                    className=" block bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Adopted
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {table.getPageCount() > 1 && (
        <div className="flex justify-between px-10 items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200  rounded"
            onClick={() => table.setPageIndex(pageIndex - 1)}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <span className="text-sm ">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <button
            className="px-4 py-2 bg-gray-200  rounded"
            onClick={() => table.setPageIndex(pageIndex + 1)}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminAllPets;
