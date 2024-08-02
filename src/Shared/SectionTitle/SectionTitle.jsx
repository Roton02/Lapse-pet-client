

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-1/2 my-8">
            <p className=" text-[#ff4880] mb-2">--- {subHeading} ---</p>
            <h3 className="text-xl md:text-3xl  font-bold text-[#515583] uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;