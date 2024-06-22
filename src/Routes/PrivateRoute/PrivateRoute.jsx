// PrivateRoute.jsx
import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AuthContext } from '../../ContextProvider/ContextProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // Render skeleton loaders while loading
        return (
            <div className="flex items-center justify-center mt-20">
                <Skeleton width={800} height={20} count={5} style={{marginBottom:'10px'}} />
            </div>
        );
    }

    if (!user) {
        // If user is not authenticated, redirect to login page
        return <Navigate state={location.pathname} to="/login" />;
    }

    // User is authenticated, render the children components
    return children;
};

export default PrivateRoute;

