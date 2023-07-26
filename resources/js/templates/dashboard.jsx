import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layouts/dasnboard/navbar";
import Sidebar from "../layouts/dasnboard/sidebar";

const Dashboard = () => {
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
