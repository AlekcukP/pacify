import React, { createContext, useContext } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu as ReactSubMenu } from 'react-pro-sidebar';
import { useLocation } from "react-router-dom";
import { Home, Customer, Analytics, Marketing, Discount, Circle } from "./icons";
import { ROUTES } from "../../../app/routes";

const isTabActive = (path, currentPath) => {
    return path === currentPath;
};

const isTabOpen = (path, currentPath) => {
    return _.startsWith(currentPath, path);
};

const PathContext = createContext(null);

const SidebarMenu = ({ children, currentPath }) => {
    return <PathContext.Provider value={currentPath}>
        <Sidebar className="sidebar" width={"18rem"}>
            <Menu className='menu'>
                { children }
            </Menu>
        </Sidebar>
    </PathContext.Provider>
};

const SubMenu = ({ children, path, label, icon }) => {
    const currentPath = useContext(PathContext);

    return <ReactSubMenu
        className='submenu'
        label={label}
        open={isTabOpen(path, currentPath)}
        active={isTabActive(path, currentPath)}
        icon={icon}
        component={<Link to={path} />}
    >
        { children }
    </ReactSubMenu>
};

const MenuTab = ({path, label, icon = null }) => {
    const currentPath = useContext(PathContext);

    return <MenuItem active={isTabActive(path, currentPath)} component={<Link to={path} />} icon={icon}>
        { label }
    </MenuItem>
};

const DashboardSidebar = () => {
    const { pathname: currentPath } = useLocation();

    return <SidebarMenu currentPath={currentPath}>
        <MenuTab path={ROUTES.BASE} label={"Home"} icon={<Home />}/>
        <SubMenu path={ROUTES.CUSTOMERS} label={"Customers"} icon={<Customer />}>
            <MenuTab path={ROUTES.SEGMENTS} label={"Segments"} icon={<Circle />}/>
        </SubMenu>
        <MenuTab path={ROUTES.ANALYTICS} label={"Analytics"} icon={<Analytics />}/>
        <MenuTab path={ROUTES.MARKETING} label={"Marketing"} icon={<Marketing />}/>
        <MenuTab path={ROUTES.DISCOUNTS} label={"Discounts"} icon={<Discount />}/>
    </SidebarMenu>;
};

export default DashboardSidebar;
