import React from 'react';
import { ROUTES } from '../app/routes';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const PublicLayout = () => {
    const { authenticated } = useAuth();
    const location = useLocation();

    if (authenticated) {
        return <Navigate to={ROUTES.BASE} state={{ from: location }} />;
    }

    return <section className='full-size bg-gradient flex-center'>
        <Outlet />
    </section>;
};

export default PublicLayout;
