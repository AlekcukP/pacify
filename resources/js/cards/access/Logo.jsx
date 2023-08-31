import React from "react";
import { classnames } from "tailwindcss-classnames";
import { Card } from 'flowbite-react';
import Image from "../../components/Image";
import BlurSpinner from "../../components/loaders/Blur";
import logo from '../../../assets/images/logo.png';

const Header = ({ title, subtext }) => {
    return <article>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className='text-md text-gray-500 font-light'>{subtext}</p>
    </article>
};

const Footer = () => {
    return <nav className='flex justify-end font-medium text-sm text-slate-500'>
        <a href='#'>Help</a>
        <a href='#' className='mx-6'>Privacy</a>
        <a href='#'>Terms</a>
    </nav>;
}

const LogoCard = ({title, subtext, children}) => {
    return <Card
        renderImage={() => <Image
            className={'p-6 pb-0'}
            src={logo}
            alt={'Logo'}
            width={250}/>
        }
        className={classnames("w-1/3", "relative")}
    >
        <Header title={title} subtext={subtext} />

        { children }

        <Footer />

        <BlurSpinner />
    </Card>;
};

export default LogoCard;
