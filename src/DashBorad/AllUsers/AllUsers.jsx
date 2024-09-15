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
    <div className="-z-50">
      <Helmet>
        <title>Lapse-Peat || All Users</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-10">
        <h2 className="text-4xl text-center">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold">Profile</th>
              <th className="font-bold">Name</th>
              <th className="font-bold">Email</th>
              <th className="font-bold">Role</th>
              <th className="font-bold">Ban</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={user.image} />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn  bg-pink-600"
                    >
                      Make{`'`}Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost "
                  >
                    <FaBan className="text-red-700 text-2xl"></FaBan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
