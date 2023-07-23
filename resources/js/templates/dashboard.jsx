import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/dasnboard/header";
import Sidebar from "../layouts/dasnboard/sidebar";

const Dashboard = () => {
    return <div className="full-size bg-white">
        <Header />
        <div className="flex h-full">
            <Sidebar />
            <main className="full-size p-2.5 bg-gray-100">
                <Outlet />
            </main>
        </div>
    </div>;
};

export default Dashboard;
