import React from "react";

const Header = ({ title, subtext }) => {
    return <article className='my-6'>
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className='mb-4 text-lg text-gray-500 font-light'>{subtext}</p>
    </article>
};

export default Header;