import { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { BiVerticalBottom } from "react-icons/bi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { Helmet } from "react-helmet-async";

const AdminOnlyUpdate = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const loadedData = useLoaderData();
  console.log(loadedData);

  const { _id, name, age, type, img, description, description2, location } = loadedData;
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState();
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    let newImage = img;
    if (fileInput && fileInput.files.length) {
      try {
        const imgData = await imageUpload(fileInput.files[0]);
        newImage = imgData;
        console.log(imgData);
      } catch (err) {
        console.log(err);
      }
    }
    const petDetails = {
      name: data.name || name,
      type: selectedOption || type,
      img: newImage,
      location: data.location || location,
      age: data.age || age,
      description: data.note1 || description,
      description2: data.note2 || description2,
    };
    console.log(petDetails);
    axiosSecure.patch(`updateMyaddedPets/${_id}`, petDetails).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/dashboard/fets");
      }
    });
  };

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div>
       <Helmet>
        <title>Lapse-Peat || Admin Peats Update </title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="relative">
        <div className="max-w-[85rem] mt-12 lg:mt-0 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:max-w-lg lg:mx-auto ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col  rounded-2xl ">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold ">
                        Update peats By Admin
                      </h1>
                    </div>

                    <div className="mt-5">
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            {...register("name")}
                            name="name"
                            defaultValue={name}
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
                            {...register("age")}
                            name="age"
                            defaultValue={age}
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
                            ref={setFileInput}
                            name="photo"
                            placeholder="Photo"
                            className="input"
                          />
                          {errors.photo && (
                            <span className="text-red-600">
                              Image is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Type</span>
                          </label>
                          <Select
                            value={selectedOption}
                            defaultValue={type}
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
                          {...register("location")}
                          name="location"
                          defaultValue={location}
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
                          {...register("note1")}
                          name="note1"
                          defaultValue={description}
                          placeholder="Note About Peat"
                          className="input input-bordered"
                        />
                        {errors.note1 && (
                          <span className="text-red-600">Note is required</span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          {...register("note2")}
                          defaultValue={description2}
                          className="textarea textarea-secondary"
                          placeholder="Write Above Peats"
                        ></textarea>

                        {errors.note1 && (
                          <span className="text-red-600">Note is required</span>
                        )}
                      </div>

                      <div className="mt-5 flex justify-center">
                        <button
                          type="submit"
                          value={""}
                          className=""
                        >
                                                  <a
                          href="#_"
                          className="relative px-9 py-3 overflow-hidden font-medium text-black bg-pink-500  border border-gray-100  shadow-inner group"
                        >
                          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                           Update
                          </span>
                        </a>
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
  );
};

export default AdminOnlyUpdate;
