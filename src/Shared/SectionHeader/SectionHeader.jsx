const SectionHeader = ({ header, subHeader }) => {
  return (
    <header>
      <div
        className={` h-[200px]  mx-auto rounded-b-md bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]
         `}
      >
        <div className="max-w-7xl mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-4xl pt-5 text-center  font-bold mb-5 text-[#393d72] "
          >
            ----{header}----
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-36 border-b-4 border-[#393d72] mx-auto"
          >
            {" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-center py-3"
          >
            {subHeader}
          </p>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
