import React from "react";

const FullScreen = ({ children }) => {
    return <div className='h-screen w-screen'>
        { children }
    </div>
};

export default FullScreen;