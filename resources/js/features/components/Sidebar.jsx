import React, { createContext, useCallback, useContext } from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCommon } from "../../hooks/useCommon";
import { setSidebarOpen } from "../../redux/common";
import { ROUTES } from "../../app/routes";
import { Sidebar as ReactSidebar } from 'flowbite-react';
import {classnames} from 'tailwindcss-classnames';
import logo from '../../../assets/images/logo.png';

import { AiFillHome } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { MdDiscount } from "react-icons/md";

const { Items, ItemGroup, Logo } = ReactSidebar;
const SidebarContext = createContext(null);

const theme = {
    root: {
        base: classnames(
            'absolute',
            'flex-none',
            'top-0',
            'left-0',
            'z-30',
            'w-64',
            'h-full',
            'transition-transform',
            '-translate-x-full',
            'sm:static',
            'sm:translate-x-0',
        ),
        inner: classnames(
            'h-full',
            'overflow-y-auto',
            'overflow-x-hidden',
            'rounded',
            'bg-gray-50',
            'py-1',
            'px-1.5',
            'dark:bg-gray-800'
        )
    },
    logo: {
        img: 'h-10',
        base: classnames(
            'sm:hidden',
            'mb-5', 'flex',
            'items-center',
            'pl-4',
            'mb-2.5',
            'mt-1'
        )
    },
    link: classnames(
        'group/tab',
        'flex',
        'items-center',
        'p-2',
        'pl-4',
        'text-gray-900',
        'rounded-lg',
        'hover:bg-gray-200',
        'dark:hover:bg-gray-700',
        'dark:text-white',
        'dark:[&.active]:bg-gray-700',
        'dark:[&.active]:text-white',
        '[&.active]:bg-gray-200',
        '[&.active]:text-slate-950'
    ),
    icon: classnames(
        'text-gray-500',
        'group-[.active]/tab:text-gray-900',
        'dark:group-[.active]/tab:text-gray-200'
    )
};

const SidebarMenu = ({ children }) => {
    const { isSidebarOpen } = useCommon();

    return <ReactSidebar theme={theme} className={classnames({ 'translate-x-0': isSidebarOpen })}>
        <Logo img={logo} imgAlt="Logo" theme={theme.logo}></Logo>
        <Items>
            <ItemGroup>
                { children }
            </ItemGroup>
        </Items>
    </ReactSidebar>;
};

const SidebarTab = ({path, label, icon: Icon }) => {
    const { closeSidebar } = useContext(SidebarContext);

    return <li onClick={closeSidebar}>
        <NavLink to={path} className={theme.link}>
            <Icon className={theme.icon}/>
            <span className="ml-3">{ label }</span>
        </NavLink>
    </li>
};

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useCommon();

    const closeSidebar = useCallback(
        () => isSidebarOpen && dispatch(setSidebarOpen(false)),
        [isSidebarOpen]
    );

    return <SidebarContext.Provider value={{closeSidebar}}>
        <SidebarMenu >
            <SidebarTab path={ROUTES.BASE} label={"Home"} icon={AiFillHome}/>
            <SidebarTab path={ROUTES.PRODUCTS} label={"Products"} icon={MdDiscount}/>
            <SidebarTab path={ROUTES.COLLECTION} label={"Collection"} icon={HiCollection}/>
            <SidebarTab path={ROUTES.INVENTORY} label={"Inventory"} icon={MdInventory}/>
        </SidebarMenu>
        <div onClick={closeSidebar} className={classnames(
            'absolute',
            'top-0',
            'z-20',
            'w-full',
            'h-full',
            'bg-gray-700/25',
            { 'hidden': !isSidebarOpen }
        )}></div>
    </SidebarContext.Provider>
};

export default Sidebar;
