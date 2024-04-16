// AuthRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({ roles, children }: any) => {
    const role = localStorage.getItem('role'); // Assuming the role is stored in localStorage
    const location = useLocation();

    if (!role || !roles.includes(role)) {
        // Redirect to login page if user is not authenticated or doesn't have required role
        return <Navigate to="/login" state={{ from: location }} />;
    }

    // Render the children if user is authenticated and has required role
    return <>{children}</>
}

export default AuthRoute;
