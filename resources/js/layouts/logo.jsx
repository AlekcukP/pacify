import React from "react";
import { Logo as LogoImage } from '../components/media/images';

import { APP_NAME } from "../constants/env-variables";

const Logo = () => {
    return <h1 className="h-fit">
        <a className='flex items-center text-xl font-lora' href='#'>
            <LogoImage />
            <span className='ml-1 text-3xl lowercase'>{APP_NAME}</span>
        </a>
    </h1>;
};

export default Logo;
