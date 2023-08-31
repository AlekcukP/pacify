import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Dashboard = ({ children }) => {
    return <div className="full-size bg-white">
        <Navbar />
        <div className="flex h-full">
            <Sidebar />
            <div className="full-size p-2.5 bg-gray-100">
                { children }
            </div>
        </div>
    </div>;
};

export default Dashboard;
