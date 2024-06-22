import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const AdminRoute = ({ children }) => {
    const { user,loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex items-center justify-center mt-20">
        <Skeleton width={800} height={20} count={5} style={{marginBottom:'10px'}} />
    </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default AdminRoute;