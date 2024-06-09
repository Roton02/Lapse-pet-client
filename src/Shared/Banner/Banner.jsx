const Banner = ({ heading, subheading, btn, description, heigth, search }) => {
  return (
    <div>
      <header>
        <div
          className={`max-w-7xl h-[550px]  mx-auto rounded-md bg-center  bg-cover
           bg-[#9cd3d8]`}
        >
          <div className=" flex flex-col lg:flex-row items-center justify-start lg:ml-14  h-full ">
            <div className="text-start lg:ml-14 w-1/2">
              {subheading && (
                <h1 className="text-xl  w-full lg:w-72  lg:mb-10 font-semibold text-[#ff4880] bg-white rounded-lg p-5  lg:text-2xl">
                  {subheading}
                </h1>
              )}
              {heading && (
                <h1 className="text-3xl font-bold  lg:my-10  text-[#393d72] lg:text-5xl">
                  {heading}
                </h1>
              )}
              {
                description&& (
                  <p className="my-5">{description}</p>
                )
              }
              
              {btn && (
                <button className="w-full px-5 py-2 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform bg-[#ff4880] rounded-md lg:w-auto hover:bg-pink-500 focus:outline-none focus:bg-[#ff4880]">
                  {btn}
                </button>
              )}
            </div>
            <div className="w-1/2">





            
              <img className="w-full"
                src="https://i.ibb.co/CHK1q5V/pets-3715733-640-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
