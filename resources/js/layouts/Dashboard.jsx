import React from "react";
import Dashboard from "../features/Dashboard";
import { ROUTES } from '../app/routes';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthState } from "../hooks/auth/state";

const DashboardLayout = () => {
    const { authenticated } = useAuthState();
    const location = useLocation();

    if (!authenticated) {
        return <Navigate to={ROUTES.LOOKUP} state={{ from: location }} />;
    }

    return <Dashboard>
        <Outlet />
    </Dashboard>
};

export default DashboardLayout;