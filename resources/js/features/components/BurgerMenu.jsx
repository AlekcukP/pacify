import React, { useCallback } from "react";
import { classnames } from "tailwindcss-classnames";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../redux/common";

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const openSidebar = useCallback(() => dispatch(setSidebarOpen(true)), []);

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
