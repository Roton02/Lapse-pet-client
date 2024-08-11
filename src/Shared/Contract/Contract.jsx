import { Helmet } from "react-helmet-async";

const Contract = () => {
  return (
    <div>
      <Helmet>
        <title>Lapse-Peat || Contract</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h1
        className="text-3xl font-anton font-semibold text-center
         underline my-5 "
      >
        Our Branch Address
      </h1>
      <div className="max-w-7xl mx-auto overflow-hidden mt-5  h-[400px]">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326418.7529822944!2d90.51535137397207!3d23.32487093833291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754ab593c20ef5d%3A0xa4a537a268b0fb48!2sSubarnachar%20Upazila!5e0!3m2!1sen!2sbd!4v1715499474876!5m2!1sen!2sbd"
        ></iframe>
      </div>
      <section className="  rounded-xl">
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:px-0 lg:grid-cols-6  gap-10   md:divide-x">
          <div className=" col-span-2 p-10 py-10 lg:py-0 text-white bg-slate-900 ">
            <div className="">
              <div className=" pt-5">
                <p>Contact</p>
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="text-3xl  md:text-4xl my-8 font-bold"
                >
                  <span className="text-pink-700">Lapse</span> Peats
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="pt-2 pb-4"
                >
                  Contact us to unlock the door to your perfect Adopted Peats.
                </p>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="space-y-4"
                >
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Subornachar, Noakhali</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>0182000000</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>MR Coders.tech @business.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            noValidate=""
            className="flex lg:col-span-4 flex-col py-6 my-5 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                placeholder="write message"
                rows="5"
                className="block p-5 w-full rounded-md focus:ring focus:ring-opacity-75 "
              ></textarea>
            </label>
            <button
              data-aos="fade-left"
              data-aos-duration="1000"
              type="button"
              className="self-end px-8 py-3 text-lg rounded-lg bg-[#ff4880] text-white  hover:bg-gray-200 
               hover:text-black duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contract;
