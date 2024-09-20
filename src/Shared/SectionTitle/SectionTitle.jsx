/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading, month }) => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className="mx-auto text-center md:w-1/2 my-8">
      <p className=" text-[#ff4880] mb-2">
        --- {subHeading} {month}---
      </p>
      <h3 className="text-xl md:text-3xl  font-bold uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
