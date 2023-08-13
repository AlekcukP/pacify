import React from 'react';
import { Outlet } from "react-router-dom";

const AccessPanel = () => {
    return <section className='full-size bg-gradient'>
        <div className="flex-center h-full">
            <div className='w-[512px] h-fit bg-white shadow-md rounded p-9'>
                <Outlet />
            </div>
        </div>
    </section>;
};

export default AccessPanel;
