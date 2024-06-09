// import Banner from "../../Shared/Banner/Banner";
import Banner2 from "../../Shared/Banner/Banner2";
import BecomeAMembar from "./BecomeAMembar";
import CallToAction from "./CallToAction";
import Choses from "./Choses";
import Donators from "./Donators";
import Indroduction from "./Indroduction";
import OurTeam from "./OurTeam";
import PeatCetegory from "./PeatCetegory";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Banner heading='Help Animals'  subheading={'The reason you need'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} btn={'Discover Me'}></Banner> */}
      <Banner2></Banner2>
      <PeatCetegory></PeatCetegory>
      <CallToAction></CallToAction>
      <Choses></Choses>
      {/* <BecomeAMembar></BecomeAMembar> */}
      <Testimonials></Testimonials>
      <Donators></Donators>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
