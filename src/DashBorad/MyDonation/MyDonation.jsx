import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyDonation = () => {
  const { user: authUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myDonatePets/${authUser.email}`);
      return res.data;
    },
  });

  const handleRefundMoney = (user, amount) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to refund this amount: " + amount + " $",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user, amount);
        axiosSecure.patch(`/refund/${user._id}/${authUser.email}`, { amount })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              Swal.fire("Refunded!", "Your money has been refunded.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="my-10">
        <h2 className="text-4xl text-center">My Donation List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th className="font-bold">Pet image</th>
              <th className="font-bold">Pet name</th>
              <th className="font-bold">Donated amount</th>
              <th className="font-bold">Refund</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              user.donators[0].donate > 0 && (
                <tr key={user._id}>
                  <th></th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>
                    {(
                      user.donators
                        .filter((p) => p.email === authUser.email)
                        .reduce((total, p) => total + p.donate, 0) / 100
                    ).toFixed(2)} $
                  </td>
                  <td>
                    <button
                      onClick={() => handleRefundMoney(user, (
                        user.donators
                          .filter((p) => p.email === authUser.email)
                          .reduce((total, p) => total + p.donate, 0) / 100
                      ).toFixed(2))}
                      className="btn btn-outline btn-sm border-b-4 border-black rounded-b-lg"
                    >
                      Ask for refund
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonation;
