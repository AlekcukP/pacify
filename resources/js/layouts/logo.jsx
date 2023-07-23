import React from "react";
import { LogoImage } from '../utils/images';

const Logo = () => {
    return <h1 className="h-fit">
        <a className='flex items-center text-xl font-pacifico' href='#'>
            <LogoImage />
            <span className='ml-1'>Up Shopper</span>
        </a>
    </h1>;
};

export default Logo;
