import Swal from "sweetalert2";
import { imageUpload } from "../../api/utils";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyDonationCampaignEdit = () => {
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
    console.log(e.target.photo.files);
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
          navigate("/dashboard/myDonationCampaign");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Lapse-Pet || My Campaign Edit</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <section className="max-w-3xl p-6 mx-auto   ">
        <h2
          className="text-lg md:text-3xl text-center mt-5  pb-5 font-semibold  capitalize 
    "
        >
          Update your Donation Campaign
        </h2>
        <div className="mx-5 border  border-slate-700 mt-2"></div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:px-5 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" ">Name</label>
              <input
                id="username"
                type="text"
                name="name"
                defaultValue={editData?.name}
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary "
              />
            </div>
            <div>
              <label className=" ">Image</label>
              <input
                id="username"
                type="file"
                name="photo"
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary "
              />
            </div>

            <div>
              <label className=" ">Maximum donation amount</label>
              <input
                id="emailAddress"
                type="number"
                name="maxDonation"
                defaultValue={editData?.maxDonation}
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary "
              />
            </div>

            <div>
              <label className=" ">Last date of donation</label>
              <input
                id="password"
                type="date"
                name="date"
                defaultValue={editData?.date}
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary "
              />
            </div>
          </div>
          <div className="md:px-5">
            <label className=" ">sort Description</label>
            <input
              id="passwordConfirmation"
              type="text"
              name="sortDescription"
              defaultValue={editData?.sortDescription}
              className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary "
            />
          </div>
          <div className="px-5">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="longDescription"
              defaultValue={editData?.longDescription}
              className="textarea w-full textarea-secondary"
              placeholder="Write Above Peats"
              rows={4}
            ></textarea>
          </div>

          <div className="flex px-5 justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white text-lg transition-colors duration-300 transform  rounded-md bg-[#ff4880] hover:bg-black delay-75"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MyDonationCampaignEdit;
