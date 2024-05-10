import { useContext } from "react";
import { AuthCustomContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthCustomContext);
    const location = useLocation() ;
    if(loading){
        return <p> Loading...... </p>
    }
    if(user){
        return children ;
    }
    return <Navigate to='/login' state={location.pathname} > </Navigate>
};
// PrivateRoute.propType = {
//     children.propType = 
// }
export default PrivateRoute;