import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/utils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const CreateCampaign = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    let image = e.target.elements.photo.files[0];
    try {
      const imgData = await imageUpload(image);
      // setImageURL(imgData);
      console.log(imgData);
      image = imgData;
    } catch (err) {
      console.log(err);
    }
    const date = form.date.value;
    const maxDonation = form.maxDonation.value;
    const sortDescription = form.sortDescription.value;
    const longDescription = form.longDescription.value;
    const campaignDetails = {
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      pause: false,
      image,
      date,
      name,
      maxDonation,
      donatedAmount: 0,
      sortDescription,
      longDescription,
    };
    console.log(campaignDetails);
    axiosSecure.post("Donation/campaign", campaignDetails).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Your Campaign Added Successfully",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };
  return (
    <div className="">
      <Helmet>
        <title>Lapse-Pet || Create Campaign</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="mt-14 ">
        <h2 className="md:text-3xl text-xl  text-center">Create your Donation Campaign</h2>
      </div>
      <div className="mx-8 border  border-slate-700 mt-2"></div>

      <section className="max-w-3xl px-4 mx-auto ">
        

        <form onSubmit={handleSubmit} className="md:px-5">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" ">Name</label>
              <input
                required
                id="username"
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary"
              />
            </div>
            <div>
              <label className=" ">Image</label>
              <input
                required
                id="username"
                type="file"
                name="photo"
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary"
              />
            </div>

            <div>
              <label className=" ">
                Maximum donation amount
              </label>
              <input
                required
                id="emailAddress"
                type="number"
                name="maxDonation"
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary"
              />
            </div>

            <div>
              <label className=" ">
                Last date of donation
              </label>
              <input
                required
                id="password"
                type="date"
                name="date"
                className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary"
              />
            </div>
          </div>
          <div>
            <label className=" ">sort Description</label>
            <input
              required
              id="passwordConfirmation"
              type="text"
              name="sortDescription"
              className="block w-full px-4 py-2 mt-2  border rounded-md border-secondary"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="longDescription"
              rows={4}
              className="textarea w-full textarea-secondary"
              placeholder="Write Above Peats"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white text-lg transition-colors duration-300 transform  rounded-md bg-[#ff4880] hover:bg-black delay-75"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateCampaign;
