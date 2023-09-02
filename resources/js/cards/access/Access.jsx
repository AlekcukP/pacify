import React from "react";
import { classnames } from "tailwindcss-classnames";
import { Card, Footer as ReactFooter } from 'flowbite-react';
import BlurSpinner from "../../components/loaders/BlurSpinner";
import Logo from "../../utils/Logo";

const Header = ({ title, subtext }) => {
    return <article>
        <h2 className="text-2xl font-medium dark:text-white">{title}</h2>
        <p className='text-md text-gray-500 font-light dark:text-gray-100'>{subtext}</p>
    </article>
};

const Footer = () => {
    const { Copyright, LinkGroup, Link } = ReactFooter;

    return <ReactFooter className="shadow-none flex justify-between">
        <Copyright by="Pacify" year={2023} />
        <LinkGroup>
            <Link className="mr-6" href="">Help</Link>
            <Link className="mr-6" href="">Privacy</Link>
            <Link className="mr-6" href="">Terms</Link>
        </LinkGroup>
    </ReactFooter>
}

const AccessCard = ({title, subtext, children}) => {
    return <Card
        renderImage={() => <Logo className={'p-6 pb-0'} width={250}/>}
        className={classnames(
            "m-auto",
            "w-128",
            "card",
            "relative",
            "max-md:border-none",
            "max-md:shadow-none",
        )}
    >
        <Header title={title} subtext={subtext} />

        { children }

        <Footer />

        <BlurSpinner />
    </Card>;
};

export default AccessCard;
