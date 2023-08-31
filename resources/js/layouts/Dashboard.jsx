import React from "react";
import Dashboard from "../features/Dashboard";
import { ROUTES } from '../app/routes';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const DashboardLayout = () => {
    const { authenticated } = useAuth();
    const location = useLocation();

    if (!authenticated) {
        return <Navigate to={ROUTES.LOOKUP} state={{ from: location }} />;
    }

    return <Dashboard>
        <Outlet />
    </Dashboard>
};

export default DashboardLayout;