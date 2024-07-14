const CallToAction = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] rounded-3xl">
        <div className="container px-6 py-7 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full md:ml-10 lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className=" font-semibold text-gray-800 dark:text-white ">
                  --- DONATION <br />{" "}
                  <span className="text-[#ff4880] lg:text-4xl text-3xl">
                    YOUR MONEY SAVES LIVES
                  </span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Pets bring a constant sense of companionship, infusing our
                  living spaces with their distinctive character and warmth.
                  This relationship is deepened by the unconditional love they
                  provide, free from judgment or resentment, solidifying their
                  role not just as pets but as cherished members of the family.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#ff4880] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Donate For Campaign
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w rounded-2xl lg:max-w-3xl"
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
