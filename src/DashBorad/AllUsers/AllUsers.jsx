import { useQuery } from "@tanstack/react-query";
import { FaBan } from "react-icons/fa";
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

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/users/ban", user).then((res) => {
          if (res.data.insertedId) {
            const remainingByBanned = users.filter((b) => b._id !== user._id);
            console.log(remainingByBanned);
            Swal.fire({
              title: "Ban!",
              text: "Your file has been Ban.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    // <div className="-z-50 ">
    //   <Helmet>
    //     <title>Lapse-Peat || All Users</title>
    //     {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
    //   </Helmet>
      // <div className="my-10">
      //   <h2 className="text-4xl text-center">Total Users: {users.length}</h2>
      // </div>
    //   <div className=" ">
    //     <table className="table  md:w-full w-[500px]">
    //       {/* head */}
    //       <thead>
    //         <tr className="text-black space-x-2">
    //           <th>No</th>
    //           <th className="font-bold hidden md:inline-block">Profile</th>
    //           <th className="font-bold hidden md:inline-block ml-0 md:ml-2">Name</th>
    //           <th className="font-bold ">Email</th>
    //           <th className="font-bold">Role</th>
    //           <th className="font-bold">Delete</th>
    //         </tr>
    //       </thead>
    // <tbody>
    //   {users.map((user, index) => (
    //     <tr key={user._id}>
    //       <th>{index + 1}</th>
    //       <td className="hidden md:inline-block">
    //         <div className="avatar">
    //           <div className="w-12 rounded-full">
    //             <img src={user.image} />
    //           </div>
    //         </div>
    //       </td>
    //       <td className="hidden md:inline-block">{user.name}</td>
    //       <td className="px-2 mx-0">{user.email}</td>
    //       <td>
    //         {user.role === "admin" ? (
    //          <span className="btn btn-sm bg-green-500  px-4"> Admin</span>
    //         ) : (
    //           <button
    //             onClick={() => handleMakeAdmin(user)}
    //             className="btn btn-sm bg-pink-600 text-nowrap"
    //           >
    //             Make Admin
    //           </button>
    //         )}
    //       </td>
    //       <td>
    //         <button
    //           onClick={() => handleDeleteUser(user)}
    //           className="btn btn-sm "
    //         >
    //           <FaBan className="text-red-700 text-2xl"></FaBan>
    //         </button>
    //       </td>
    //     </tr>
    //   ))}
    // </tbody>
    //     </table>
    //   </div>
    // </div>
    <div>
      <div className="my-10">
        <h2 className="text-4xl text-center">Total Users: {users.length}</h2>
      </div>
      <section className="container px-4 mx-auto mt-16 md:mt-12">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="">
                <table className="min-w-full divide-y px-5 divide-gray-200 dark:divide-gray-700">
                  <thead className="">
                    <tr className="space-x-10 text-start ">
                      <th>No</th>
                      <th className="font-bold hidden md:inline-block">
                        Profile
                      </th>
                      <th className="font-bold hidden md:inline-block ml-0 md:ml-2">
                        Name
                      </th>
                      <th className="font-bold md:text-start ml-4">Email</th>
                      <th className="font-bold">Role</th>
                      
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
                        <td className="hidden md:inline-block  ">{user.name}</td>
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
