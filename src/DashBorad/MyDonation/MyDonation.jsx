import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyDonation = () => {
  const { user: authUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myDonatePets/${authUser.email}`);
      console.log(res.data);
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
        axiosSecure
          .patch(`/refund/${user._id}/${authUser.email}`, { amount })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              Swal.fire(
                "Refunded!",
                "Your money has been refunded.",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="-z-50 md:z-auto">
      <Helmet>
        <title>Lapse-Pet || My Donation</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="my-10">
        <h2 className="text-4xl text-center">My Donation List</h2>
      </div>
      <div className="">
        <table className="table  w-full">
          <thead>
            <tr className=" bg-slate-800   text-white  ">
              <th className="border-r">No</th>
              <th className="px-12 border-r font-bold hidden md:inline-block">Pet image</th>
              <th className="px-12 border-r font-bold">Pet name</th>
              <th className="px-12 border-r font-bold">Donated amount</th>
              <th className="px-12 border-r font-bold">Refund</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,i) => {
              const donators = user.donators || [];
              const userDonations = donators.filter(
                (p) => p.email === authUser.email
              );
              const totalDonated = userDonations.reduce(
                (total, p) => total + p.donate,
                0
              );

              return totalDonated > 0 ? (
                <tr key={user._id}>
                  <th>{i+1}</th>
                  <td className="hidden px-12 md:inline-block">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                  </td>
                  <td className="px-12">{user.name}</td>
                  <td className="px-12">{(totalDonated / 100).toFixed(2)} $</td>
                  <td className="px-12">
                    <button
                      onClick={() =>
                        handleRefundMoney(user, (totalDonated / 100).toFixed(2))
                      }
                      className="btn btn-outline btn-sm border-b-4 border-black rounded-b-lg text-nowrap"
                    >
                       refund
                    </button>
                  </td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonation;
