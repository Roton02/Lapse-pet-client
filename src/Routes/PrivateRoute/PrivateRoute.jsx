import PropTypes from 'prop-types';
import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from '../../ContextProvider/ContextProvider';
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes ={
    children:PropTypes.node.isRequired
}
export default PrivateRoute;