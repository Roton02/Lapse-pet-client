import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { BiVerticalBottom } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/utils";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Helmet } from "react-helmet-async";

const AddPets = () => {
  // localStorage.setItem("theme",  "dark" );
  const [content, setContent] = useState('');
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [photo, setPhoto] = useState(null);
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    register("note2", { required: true });
  }, [register]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const onSubmit = async (data) => {
    const AddedPersonImage = user.photoURL;
    const AddedPersonName = user.displayName;
    const AddedPersonEmail = user.email;

    try {
      const imgData = await imageUpload(data.photo[0]);
      data.photo = imgData;
    } catch (err) {
      console.log(err);
    }

    const petDetails = {
      name: data.name,
      type: selectedOption.value,
      img: data.photo,
      location: data.location,
      age: data.age,
      description: data.note1,
      description2: data.note2,
      date: getCurrentDate(),
      time: getCurrentTime(),
      adopted: false,
      addedPerson: { AddedPersonImage, AddedPersonName, AddedPersonEmail },
    };
console.log(petDetails);
    axiosSecure.post("/AddPet", petDetails).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Added!",
          text: "Your file has been added successfully.",
          icon: "success",
        });
      }
    });
  };

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="py-10">
       <Helmet>
        <title>Lapse-Peat || Add Peats</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="max-w-4xl mx-auto p-8 rounded-lg ">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                Add A New Pet
              </h1>
              <p className="text-gray-600">
                Fill in the details below to add a new pet for adoption.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  />
                  {errors.name && (
                    <span className="text-red-600 text-sm">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="text"
                    {...register("age", { required: true })}
                    name="age"
                    placeholder="Pet age"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  />
                  {errors.age && (
                    <span className="text-red-600 text-sm">Age is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    name="photo"
                    placeholder="Photo"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                  {errors.photo && (
                    <span className="text-red-600 text-sm">Image is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="block text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", { required: true })}
                  name="location"
                  placeholder="Location"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
                {errors.location && (
                  <span className="text-red-600 text-sm">Location is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Short Note
                </label>
                <input
                  type="text"
                  {...register("note1", { required: true })}
                  name="note1"
                  placeholder="Short Note About Pet"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
                {errors.note1 && (
                  <span className="text-red-600 text-sm">Short note is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <ReactQuill
                  value={content}
                  onChange={(value) => {
                    setContent(value);
                    setValue("note2", value);
                  }}
                  className="mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  placeholder="Write About Pet"
                />
                {errors.note2 && (
                  <span className="text-red-600 text-sm">Description is required</span>
                )}
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md w-1/3 py-2 px-4 bg-[#ff4880] hover:bg-pink-400 text-white font-semibold transition duration-300"
                >
                  Add Pet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPets;
