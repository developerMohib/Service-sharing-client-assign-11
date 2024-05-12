
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Root = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <div className='max-w-7xl mx-auto' >
            <Outlet> </Outlet>
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default Root;