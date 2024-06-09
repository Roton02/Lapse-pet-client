import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Testimonials = () => {
  return (
    <div className="px-10">
      <SectionTitle
       heading={'What Our Clients Say'}
        subHeading={"Testimaonals"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="p-10 text-center">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your Business to the{" "}
                <span className="text-blue-500">next level.</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem officiis reprehenderit, aperiam veritatis non, quod
                veniam fuga possimus hic explicabo laboriosam nam. A tempore
                totam ipsa nemo adipisci iusto!
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                      alt=""
                    /> 
                  </div>
                </div>
                  <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">Roton</p>
                  <p>Happy Customer</p>
                  </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your Business to the{" "}
                <span className="text-blue-500">next level.</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem officiis reprehenderit, aperiam veritatis non, quod
                veniam fuga possimus hic explicabo laboriosam nam. A tempore
                totam ipsa nemo adipisci iusto!
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                      alt=""
                    /> 
                  </div>
                </div>
                  <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">Roton</p>
                  <p>Happy Customer</p>
                  </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your Business to the{" "}
                <span className="text-blue-500">next level.</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem officiis reprehenderit, aperiam veritatis non, quod
                veniam fuga possimus hic explicabo laboriosam nam. A tempore
                totam ipsa nemo adipisci iusto!
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                      alt=""
                    /> 
                  </div>
                </div>
                  <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">Roton</p>
                  <p>Happy Customer</p>
                  </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your Business to the{" "}
                <span className="text-blue-500">next level.</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem officiis reprehenderit, aperiam veritatis non, quod
                veniam fuga possimus hic explicabo laboriosam nam. A tempore
                totam ipsa nemo adipisci iusto!
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                      alt=""
                    /> 
                  </div>
                </div>
                  <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">Roton</p>
                  <p>Happy Customer</p>
                  </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your Business to the{" "}
                <span className="text-blue-500">next level.</span>
              </h2>

              <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                quidem officiis reprehenderit, aperiam veritatis non, quod
                veniam fuga possimus hic explicabo laboriosam nam. A tempore
                totam ipsa nemo adipisci iusto!
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                      alt=""
                    /> 
                  </div>
                </div>
                  <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">Roton</p>
                  <p>Happy Customer</p>
                  </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonials;
