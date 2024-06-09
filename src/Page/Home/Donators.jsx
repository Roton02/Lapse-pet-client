import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const Donators = () => {
  return (
    <div>
      <SectionTitle
        heading={"COMPANIES THAT HELP US"}
        subHeading={"OUR DONORS  "}
      ></SectionTitle>
      <Marquee>
        <div className="flex gap-16">
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXV7-ZMSfGaP0jLXDCAvZ_E7PDBNsp2e08F6dr0S8md23U0emSejl33GOe9zIHKc16vQ&usqp=CAU "
            alt=""
          />
          <img
            className="h-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXcZ7hsanCrTpnwnmzSrrhrVPQJl0KUHejtAh739J5q35XjpgklsKV-J2faFhFzLIBhk&usqp=CAU "
            alt=""
          />
          <img
            className="h-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzktrocM3gaaUuF1MvcpfE8dz6aLsQbLOvQw&s"
            alt=""
          />
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYspF3wr0T1iyDu1dVtwtZ4OcqVd-Qiz2fXQ&s "
            alt=""
          />
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzS-mTzLDB29zcHpGvz3zK--vNHySFOjMVQ&s "
            alt=""
          />
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXV7-ZMSfGaP0jLXDCAvZ_E7PDBNsp2e08F6dr0S8md23U0emSejl33GOe9zIHKc16vQ&usqp=CAU "
            alt=""
          />
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNedYcRf9XwAahtC0U1u_GiHMLAVKhKAxBg&s "
            alt=""
          />
          <img
            className="h-32 "
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwLFi5rQ4-3jsOnsndU-vUXKmVFh5_UsMww&s "
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Donators;
