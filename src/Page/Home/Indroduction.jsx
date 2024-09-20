/* eslint-disable react/no-unknown-property */
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className=" py-12">
      <SectionTitle
        heading={"About Us"}
        subHeading={"Why Chose us "}
      ></SectionTitle>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {/* Video Section */}
          <div className="relative overflow-hidden rounded-lg mt-20 h-96">
            {/* Replace the video URL with your YouTube video embed code */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iLrW05LHMzI?si=J8BdNVcXvTdjQI1L"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold  sm:text-4xl">
              Welcome to Our Pet Adoption Community
            </h2>
            <p className="mt-4 max-w-xl text-xl ">
              At our Pet Adoption website, we are dedicated to finding loving
              homes for animals in need. We believe in the joy and enrichment
              pets bring to our lives, and we are committed to making the
              adoption process simple, enjoyable, and rewarding for both pets
              and adopters.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg ">Compassionate Team</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg ">Seamless Adoption Process</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg ">Community Impact</p>
              </div>
              {/* Add more reasons if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
