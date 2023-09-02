import React from 'react';
import { ROUTES } from '../app/routes';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthState } from '../hooks/auth/state';
import { classnames } from 'tailwindcss-classnames';

const PublicLayout = () => {
    const { authenticated } = useAuthState();
    const location = useLocation();

    if (authenticated) {
        return <Navigate to={ROUTES.BASE} state={{ from: location }} />;
    }

    return <section className={classnames(
        'full-size',
        'flex',
        'md:bg-gradient',
        'dark:bg-gray-800'
    )}>
        <Outlet />
    </section>;
};

export default PublicLayout;
