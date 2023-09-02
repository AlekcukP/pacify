import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import classnames from "tailwindcss-classnames";

const Dashboard = ({ children }) => {
    return <div className={classnames('full-size', 'bg-white', 'relative', 'dark:bg-gray-800')}>
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
