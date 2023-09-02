import React, { Fragment } from "react";
import _ from "lodash";
import classnames from 'tailwindcss-classnames';
import { NavLink } from "react-router-dom";
import { useComponentsState } from "../../hooks/components/state";
import { ROUTES } from "../../app/routes";
import { Sidebar as ReactSidebar } from 'flowbite-react';
import { useThemeState } from "../../hooks/app/state";
import { useCloseSidebar } from "../../hooks/components/actions";
import { AiFillHome } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { MdDiscount } from "react-icons/md";

const { Items, ItemGroup, Logo } = ReactSidebar;

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
    ),
    background: classnames(
        'absolute',
        'top-0',
        'z-20',
        'w-full',
        'h-full',
        'bg-gray-700/25'
    )
};

const SidebarMenu = ({ children }) => {
    const { isSidebarOpen } = useComponentsState();
    const { logo } = useThemeState();

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
    const { closeSidebar } = useCloseSidebar();

    return <li onClick={closeSidebar}>
        <NavLink to={path} className={theme.link}>
            <Icon className={theme.icon}/>
            <span className="ml-3">{ label }</span>
        </NavLink>
    </li>
};

const SidebarBackground = () => {
    const { isSidebarOpen } = useComponentsState();
    const { closeSidebar } = useCloseSidebar();

    return <div onClick={closeSidebar} className={classnames(
        theme.background,
        { 'hidden': !isSidebarOpen }
    )}></div>
};

const Sidebar = () => {
    return <Fragment>
        <SidebarMenu >
            <SidebarTab path={ROUTES.BASE} label={"Home"} icon={AiFillHome}/>
            <SidebarTab path={ROUTES.PRODUCTS} label={"Products"} icon={MdDiscount}/>
            <SidebarTab path={ROUTES.COLLECTION} label={"Collection"} icon={HiCollection}/>
            <SidebarTab path={ROUTES.INVENTORY} label={"Inventory"} icon={MdInventory}/>
        </SidebarMenu>
        <SidebarBackground/>
    </Fragment>
};

export default Sidebar;
