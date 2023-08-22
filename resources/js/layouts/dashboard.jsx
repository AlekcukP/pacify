import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ROUTES } from "../app/routes";
import Navbar from "../components/dashboard/common/navbar";
import Sidebar from "../components/dashboard/common/sidebar";

const Dashboard = () => {
    const authenticated = useSelector(state => state.auth.user.authenticated);

    if (!authenticated) {
        return <Navigate to={ROUTES.LOOKUP}/>
    }

    return <div className="full-size bg-white">
        <Navbar />
        <div className="flex h-full">
            <Sidebar />
            <div className="full-size p-2.5 bg-gray-100">
                <Outlet />
            </div>
        </div>
    </div>;
};

export default Dashboard;
