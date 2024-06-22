// import Banner from "../../Shared/Banner/Banner";
import { Helmet } from "react-helmet-async";
import Banner2 from "../../Shared/Banner/Banner2";
import CallToAction from "./CallToAction";
import Choses from "./Choses";
import Donators from "./Donators";
import AboutUs from "./Indroduction";
import PeatCetegory from "./PeatCetegory";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Helmet>
        <title>Lapse-Peat || Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      {/* <Banner heading='Help Animals'  subheading={'The reason you need'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} btn={'Discover Me'}></Banner> */}
      <Banner2></Banner2>
      <PeatCetegory> </PeatCetegory>
      <CallToAction></CallToAction>
      <Choses></Choses>
      {/* <BecomeAMembar></BecomeAMembar> */}
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
      
      <Donators></Donators>
      
    </div>
  );
};

export default Home;
