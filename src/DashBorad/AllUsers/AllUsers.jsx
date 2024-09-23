import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className=" ">
      <Helmet>
        <title>Lapse-Pet || All Users</title>
      </Helmet>
      <div className="my-10 -z-50">
        <h2 className="text-4xl text-center">Total Users: {users.length}</h2>
      </div>
      <section className="container px-4 mx-auto mt-16 md:mt-12">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="">
                <table className="min-w-full table max-w-5xl mx-auto overflow-scroll divide-y px-5 divide-white ">
                  <thead className="bg-slate-800 text-white">
                    <tr className="space-x-10 text-start ">
                      <th className="border-l">No</th>
                      <th className="font-bold border-l hidden md:inline-block">
                        Profile
                      </th>
                      <th className="font-bold border-l hidden md:inline-block ml-0 md:ml-2">
                        Name
                      </th>
                      <th className="font-bold border-l md:text-start ml-4">Email</th>
                      <th className="font-bold border-l">Role</th>
                    </tr>
                  </thead>

                  <tbody className="">
                    {users.map((user, index) => (
                      <tr key={user._id} className="space-x-10  mt-1 ">
                        <td className="mt-7">{index + 1}</td>
                        <td className="hidden md:inline-block mt-5">
                          <div className="avatar">
                            <div className="w-12 rounded-full">
                              <img src={user.image} />
                            </div>
                          </div>
                        </td>
                        <td className="hidden md:inline-block  ">
                          {user.name}
                        </td>
                        <td className="px-2 mx-0  ml-5 ">{user.email}</td>
                        <td className="mt-7 ">
                          {user.role === "admin" ? (
                            <span className="btn btn-sm mt-2 bg-green-500  px-8">
                              {" "}
                              Admin
                            </span>
                          ) : (
                            <button
                              onClick={() => handleMakeAdmin(user)}
                              className="btn btn-sm bg-pink-600 text-nowrap"
                            >
                              Make Admin
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
