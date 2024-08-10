import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Header = () => {
  return (
    <div
      className=" py-2 w-screen mx-auto    bg-[#ff4880] 
          "
    >
      <div className="hidden p-2  max-w-7xl mx-auto text-white font-medium   lg:flex 
        justify-between px-3">
        <div className="flex gap-8 m">
          <p className="flex items-center gap-2">
            {" "}
            <BsFillTelephonePlusFill /> Tel: +440-98-5298
          </p>
          <div className="divider   lg:divider-horizontal"></div>

          <p className="flex items-center gap-2">
            <IoMdMail /> info@example.com
          </p>
          <div className="divider lg:divider-horizontal"></div>
          <p className="flex items-center gap-2">
            <IoLocation /> 121 King Street, Melbourne
          </p>
        </div>
        <div className="flex gap-8">
          <a href="https://web.facebook.com/roton.chodiry" target="_blank" className=" p-2">
            <FaFacebook />
          </a>
          <a href="https://web.facebook.com/roton.chodiry" target="_blank" className=" p-2">
          <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a href="https://x.com/MdSanaulla75762" target="_blank" className=" p-2">
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
