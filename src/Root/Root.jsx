
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default Root;