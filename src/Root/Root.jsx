
import {Outlet, useLocation} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HomNavbar from '../Shared/Navbar/HomNavbar';

AOS.init();

const Root = () => {
    const location = useLocation()
    const noHeaderAndFooter =location.pathname.includes('login' )|| location.pathname.includes('register') || location.pathname.includes('Login')
    console.log(location);
    return (
        <div>
           {noHeaderAndFooter || <Header></Header>}
           <div className="max-w-7xl mx-auto"> 
           {noHeaderAndFooter ||   <Navbar></Navbar>}
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {noHeaderAndFooter || <Footer></Footer>}
           </div>
        </div>
    );
};

export default Root;