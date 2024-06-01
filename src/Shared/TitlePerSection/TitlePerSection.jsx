

const TitlePerSection = ({title}) => {
    return (
        <div>
            <div className="flex justify-center items-center my-8 underline ">
                <h1 className="uppercase font-bold text-2xl md:text-4xl text-center">{title}</h1>
            </div>
            
        </div>
    );
};

export default TitlePerSection;