import React from "react";
import { Logo as LogoImage } from './images';

const Logo = () => {
    return <h1 className="h-fit">
        <a className='flex items-center text-xl font-lora' href='#'>
            <LogoImage />
            <span className='ml-1 text-3xl lowercase'>{__APP_NAME__}</span>
        </a>
    </h1>;
};

export default Logo;
