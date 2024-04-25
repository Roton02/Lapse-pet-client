
import {Outlet} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../Shared/Navber/Navbar';
import Footer from '../Shared/Navber/Footer/Footer';
AOS.init();

const Root = () => {
    return (
        <div className="my-8 max-w-7xl px-3 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;