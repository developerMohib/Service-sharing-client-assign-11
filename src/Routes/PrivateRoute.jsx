import { useContext } from "react";
import { AuthCustomContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthCustomContext);
    const location = useLocation() ;
    console.log(location, 'private route')
    if(loading){
        return <p> Loading...... </p>
    }
    if(user){
        return children ;
    }
    return <Navigate to='/login' > </Navigate>
};
// PrivateRoute.propType = {
//     children.propType = 
// }
export default PrivateRoute;