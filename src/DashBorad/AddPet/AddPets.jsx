import { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
// import { BiVerticalBottom } from "react-icons/bi";
// import useAuth from "../../Hooks/useAuth";
import Banner from "../../Shared/Banner/Banner";
import { BiVerticalBottom } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
// import { useState } from "react";
import { imageUpload } from "../../api/utils";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddPets = () => {
    const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [photo, setPhoto] = useState(null);
  console.log(photo);
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState(null);
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
      
    

  const onSubmit = async (data) => {
    console.log(
      data.name,
      data.age,
      data.photo,
      data.note1,
      data.note2,
      data.location
    );
    const AddedPersonImage = user.photoURL;
    const AddedPersonName = user.displayName;
    const AddedPersonEmail = user.email;
    try {
      const imgData = await imageUpload(data.photo[0]);
      data.photo= imgData
      console.log(imgData);
    } catch (err) {
      console.log(err);
    }
    const petDetails = {
      name: data.name,
      type: selectedOption,
      img: data.photo,
      location: data.location,
      age: data.age,
      description: data.note1,
      description2: data.note2,
      date: getCurrentDate(),
      adopted: false,
      addedPerson: { AddedPersonImage, AddedPersonName, AddedPersonEmail },
    };
    console.log(petDetails);
    axiosPublic.post('/AddPet', petDetails)
      .then(res => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Added !",
            text: "Your file has been added Successfull.",
            icon: "success"
          });
        }
      })
  };

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
    // setPetType(selectedOption)
  };

  return (
    <div>
      <div className=" ">
        <Banner
          heading={"Add a Pet"}
          description={"You can add a pet as your liked "}
        ></Banner>
        <div>
          <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="">
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:max-w-lg lg:mx-auto  ms-auto">
                      <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                        <div className="text-center">
                          <h1
                            className="block text-2xl font-bold text-gray-800
                 dark:text-white"
                          >
                            Add A new Peat{" "}
                          </h1>
                        </div>

                        <div className="mt-5">
                          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                            <BiVerticalBottom />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Name</span>
                              </label>
                              <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                              />
                              {errors.name && (
                                <span className="text-red-600">
                                  Name is required
                                </span>
                              )}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Age</span>
                              </label>
                              <input
                                type="text"
                                {...register("age", { required: true })}
                                name="age"
                                placeholder="peat age"
                                className="input input-bordered"
                              />
                              {errors.age && (
                                <span className="text-red-600">
                                  Age is required
                                </span>
                              )}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Image</span>
                              </label>
                              <input
                                type="file"
                                {...register("photo", { required: true })}
                                name="photo"
                                placeholder="Photo"
                                className="input "
                              />
                              {errors.photo && (
                                <span className="text-red-600">
                                  Image is required
                                </span>
                              )}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Image</span>
                              </label>
                              <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                placeholder={selectedOption}
                              />
                            </div>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">location</span>
                            </label>
                            <input
                              type="text"
                              {...register("location", { required: true })}
                              name="location"
                              placeholder="write reciver location"
                              className="input input-bordered"
                            />
                            {errors.location && (
                              <span className="text-red-600">
                                Location is required
                              </span>
                            )}
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Short Note</span>
                            </label>
                            <input
                              type="text"
                              {...register("note1", { required: true })}
                              name="note1"
                              placeholder="Note About Peat"
                              className="input input-bordered"
                            />
                            {errors.note1 && (
                              <span className="text-red-600">
                                Note is required
                              </span>
                            )}
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Description</span>
                            </label>
                            <textarea
                              {...register("note2", { required: true })}
                              className="textarea textarea-secondary"
                              placeholder="Write Above Peats"
                            ></textarea>

                            {errors.note1 && (
                              <span className="text-red-600">
                                Note is required
                              </span>
                            )}
                          </div>

                          <div className="mt-5 flex justify-center ">
                            <button
                              type="submit"
                              value={""}
                              className="rounded-md w-1/3  btn  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-[#1e847f]hover:text-white"
                            >
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e847f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative my-auto  text-[#1e847f] transition duration-300 group-hover:text-white ease">
                                Add Peat
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPets;
