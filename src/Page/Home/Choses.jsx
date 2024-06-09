import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Choses = () => {
  return (
    <div>
      <SectionTitle
        subHeading={" OUR WORK "}
        heading={"WE CONSIDER ANIMAL WELFARE OUR TOP PRIORITY"}
      ></SectionTitle>
      <div  className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
        <img  className="rounded-xl"
          src="https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/a-rescue-dog-is-at-the-veterinarian-on-a-leash-and-2021-09-01-15-09-41-utc.jpg "
          alt=""
        />
        </div>
        <img className="rounded-xl"
          src="  https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/beautiful-woman-kissing-her-dog-at-sunset-2021-08-30-17-40-41-utc.jpg "
          alt=""
        />
        <img className="rounded-xl"
          src="https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/cute-little-kittens-crying-in-carrier-box-two-hun-2021-09-02-10-55-28-utc-1.jpg  "
          alt=""
        />
        <img className="rounded-xl"
          src=" https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/pet-love-homeless-dog-adoption-caring-for-a-pet-2021-08-30-22-00-55-utc-1.jpg  "
          alt=""
        />
        <img className="rounded-xl"
          src="https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/national-pet-adoption-day-2021-08-29-01-05-31-utc.jpg   "
          alt=""
        />
        <img className="rounded-xl"
          src=" https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/pet-giving-paw-to-young-woman-2021-09-24-04-00-07-utc.jpg  "
          alt=""
        />
       
      </div>
    </div>
  );
};

export default Choses;
