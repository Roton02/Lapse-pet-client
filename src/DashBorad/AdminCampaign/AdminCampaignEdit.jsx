import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import { Helmet } from "react-helmet-async";

const AdminCampaignEdit = () => {
  const [editData, setEditData] = useState();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/campaignAllPeats/${params.id}`).then((res) => {
      console.log(res.data);
      setEditData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || editData.name;
    let image = editData.image;
    if (e.target.photo.files.length > 0) {
      console.log("object");
      try {
        const imgData = await imageUpload(e.target.photo.files[0]);
        image = imgData;
        console.log(imgData);
      } catch (err) {
        console.log(err);
      }
    }
    const date = form.date.value || editData.date;
    const maxDonation = form.maxDonation.value || editData.maxDonation;
    const sortDescription =
      form.sortDescription.value || editData.sortDescription;
    const longDescription =
      form.longDescription.value || editData.longDescription;
    const campaignDetails = {
      image,
      date,
      name,
      maxDonation,
      sortDescription,
      longDescription,
    };

    console.log(campaignDetails);
    axiosSecure
      .patch(`/myCampaignUpdate/${params.id}`, campaignDetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Campaign Update Successfully",
            showConfirmButton: false,
            timer: 1200,
          });
          navigate("/dashboard/admin/AllDonation");
        }
      });
  };
  console.log("object");
  return (
    <div>
      <Helmet>
        <title>Lapse-Peat || Admin Campaign Edit</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <section className="max-w-3xl mt-20 lg:mt-00 p-6 mx-auto  ">
        <h2
          className="text-lg text-center border-b-2 pb-5 font-semibold capitalize 
    "
        >
          Update Donation Campaign By Admin
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" ">Name</label>
              <input
                id="username"
                type="text"
                name="name"
                defaultValue={editData?.name}
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className=" ">Image</label>
              <input
                id="username"
                type="file"
                name="photo"
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=" ">Maximum donation amount</label>
              <input
                id="emailAddress"
                type="number"
                name="maxDonation"
                defaultValue={editData?.maxDonation}
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=" ">Last date of donation</label>
              <input
                id="password"
                type="date"
                name="date"
                defaultValue={editData?.date}
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <label className=" ">sort Description</label>
            <input
              id="passwordConfirmation"
              type="text"
              name="sortDescription"
              defaultValue={editData?.sortDescription}
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="longDescription"
              defaultValue={editData?.longDescription}
              className="textarea w-full textarea-secondary"
              placeholder="Write Above Peats"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#ff4880]  hover:bg-pink-500 rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminCampaignEdit;
