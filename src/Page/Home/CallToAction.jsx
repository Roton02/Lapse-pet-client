import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] ">
      <header className="max-w-7xl mx-auto  ">
        <div className="container px-6 py-7 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:ml-10 lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" font-semibold  text-[#ff4880]"
                >
                  --- DONATION <br />{" "}
                  <span
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-[#ff4880] lg:text-4xl text-3xl"
                  >
                    YOUR MONEY SAVES LIVES
                  </span>
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="mt-3 dark:text-black"
                >
                  Pets bring a constant sense of companionship, infusing our
                  living spaces with their distinctive character and warmth.
                  This relationship is deepened by the unconditional love they
                  provide, free from judgment or resentment, solidifying their
                  role not just as pets but as cherished members of the family.
                </p>
                <Link
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  to="/campaign"
                  className="pt-10"
                >
                  <a
                    href="#_"
                    className="relative inline-block mt-4 px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#ff4880] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#ff4880] group-hover:bg-[#ff4880]"></span>
                    <span className="relative text-[#ff4880] group-hover:text-white">
                      Donate For Campaign
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            >
              <img
                className=" w-full md:px-0 lg:p-0 rounded-2xl lg:max-w-3xl"
                src="https://i.ibb.co/TPbZ4dP/volunteering-help-charity-teen-woman-with-dog-res-2021-09-04-04-17-59-utc-1.jpg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CallToAction;
