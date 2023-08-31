import React, { createContext, useContext } from "react";
import _ from "lodash";
import { twMerge } from 'tailwind-merge';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Customer, Analytics, Marketing, Discount, Circle, ChevronUp, ChevronDown } from "./Icons";
import { ROUTES } from "../../app/routes";
import { Sidebar as ReactSidebar } from 'flowbite-react';

const { Item, Items, ItemGroup, Collapse} = ReactSidebar;

// const isTabActive = (path, currentPath) => {
//     return path === currentPath;
// };

// const isTabOpen = (path, currentPath) => {
//     return _.startsWith(currentPath, path);
// };

// const PathContext = createContext(null);

const ChevronIcon = ({ open }) => {};

const SidebarMenu = ({ children }) => {
    return <ReactSidebar className="w-80">
        <Items>
            <ItemGroup>
                { children }
            </ItemGroup>
        </Items>
    </ReactSidebar>
};

const SubMenu = ({ children, path, label, icon }) => {

    return <Collapse
        label={label}
        icon={icon}
    >
        { children }
    </Collapse>
};

const SidebarItem = ({path, label, icon: Icon }) => {

    return <li>
        <Link to={path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            { <Icon /> }
            <span className="ml-3">{ label }</span>
        </Link>
    </li>
};

const Sidebar = () => {
    return <SidebarMenu>
        <SidebarItem path={ROUTES.BASE} label={"Home"} icon={Home}/>
        <SubMenu path={ROUTES.CUSTOMERS} label={"Customers"} icon={Customer}>
            <SidebarItem path={ROUTES.SEGMENTS} label={"Segments"} icon={Circle}/>
        </SubMenu>
        <SidebarItem path={ROUTES.ANALYTICS} label={"Analytics"} icon={Analytics}/>
        <SidebarItem path={ROUTES.MARKETING} label={"Marketing"} icon={Marketing}/>
        <SidebarItem path={ROUTES.DISCOUNTS} label={"Discounts"} icon={Discount}/>
    </SidebarMenu>;
};

export default Sidebar;