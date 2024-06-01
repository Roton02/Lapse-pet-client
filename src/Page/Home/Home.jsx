import Banner from "../../Shared/Banner/Banner";
import PeatCetegory from "./PeatCetegory";

const Home = () => {
    return (
        <div>
            <Banner heading='Help Animals'  subheading={'The reason you need'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} btn={'Discover Me'}></Banner>
            <PeatCetegory></PeatCetegory>
        </div>
    );
};

export default Home;