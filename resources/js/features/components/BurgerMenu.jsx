import React from "react";
import { classnames } from "tailwindcss-classnames";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useOpenSidebar } from "../../hooks/components/actions";

const BurgerMenu = () => {
    const openSidebar = useOpenSidebar();

    const theme = classnames(
        'inline-flex',
        'items-center',
        'p-2',
        'text-sm',
        'text-gray-500',
        'rounded-lg',
        'sm:hidden',
        'hover:bg-gray-100',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-gray-200',
        'dark:text-gray-400',
        'dark:hover:bg-gray-700',
        'dark:focus:ring-gray-600',
    );

    return <button onClick={openSidebar} className={theme}><HiOutlineMenuAlt2 size={24}/></button>
};

export default BurgerMenu;
