import React from 'react';
import { IconContext } from "react-icons";

const Icon = ({ color, style, className, size, onClick, component: Icon }) => {
    return <IconContext.Provider value={{ color, size }}>
        <div className={className} style={style} onClick={onClick}>
            <Icon />
        </div>
    </IconContext.Provider>;
};

export default Icon;
