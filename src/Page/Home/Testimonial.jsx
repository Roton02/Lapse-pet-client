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
        heading={"What Our Clients Say"}
        subHeading={"Testimaonals"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="p-10 text-center">
          <section className="">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl dark:text-white">
                Transformative Joy: My Journey with Adopted Pets
              </h2>

              <p className="max-w-4xl mt-6 text-center  dark:text-gray-300">
                Adopting my dog and cat transformed their lives from shy and
                fearful to confident and loving, while bringing immense joy,
                companionship, and a sense of purpose into my daily life.
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
                  <p className="font-bold text-slate-500 text-2xl mt-5">
                    Roton
                  </p>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl dark:text-white">
                From Fear to Love: A Tale of Adoption
              </h2>

              <p className="max-w-4xl mt-6 text-center ">
                Adopting my pets has been a transformative experience. My once
                timid dog now thrives with confidence, enjoying every walk and
                playtime. My previously aloof cat has become a loving,
                affectionate companion who seeks out cuddles.
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/56bCMrC/pexels-moose-photos-170195-1036623.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">
                    misbaul houqe
                  </p>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl ">
                Unconditional Bonds: Adopted Pets in My Life
              </h2>

              <p className="max-w-4xl mt-6 text-center ">
                Their growth has brought joy and laughter to my home, fostering
                a deep sense of responsibility and fulfillment. The journey with
                them has enriched my life beyond measure, providing endless love
                and companionship.
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/crHBSpv/profile-1691431783-2d1a982d7f192858ae7b1cd56691dbc3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">
                    wisra
                  </p>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight xl:text-3xl dark:text-white">
                Finding Happiness: How Adopting Pets Changed Everything
              </h2>

              <p className="max-w-4xl mt-6 text-center ">
                Adopting my dog and cat has filled my home with love and
                happiness. My dogs journey from fearful to fearless, enjoying
                every adventure, has been incredible. My cat, once reserved, now
                loves to snuggle and play, bringing warmth and joy.
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://i.ibb.co/N9rJQ7w/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background-1258-657.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">
                    gypan
                  </p>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="p-10 text-center">
          <section className="">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight  xl:text-3xl dark:text-white">
                Adopt, Love, Cherish: My Experience with Rescued Animals
              </h2>

              <p className="max-w-4xl mt-6 text-center ">
                These transformations have deepened my sense of empathy and
                responsibility. The unconditional love and companionship they
                provide have truly enhanced my life in countless ways.
              </p>

              <div className="flex items-center gap-3 w-full mt-6 sm:w-auto">
                <div className="avatar ">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/nzjN9sv/images.jpg" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="font-bold text-slate-500 text-2xl mt-5">
                    Zepra
                  </p>
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
