import React, { createContext, useContext } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu as ReactSubMenu } from 'react-pro-sidebar';

const isTabActive = (path, currentPath) => {
    return path === currentPath;
};

const isTabOpen = (path, currentPath) => {
    return _.startsWith(currentPath, path);
};

const PathContext = createContext(null);

export const SidebarMenu = ({ children, currentPath }) => {
    return <PathContext.Provider value={currentPath}>
        <Sidebar className="sidebar" width={"18rem"}>
            <Menu className='menu'>
                { children }
            </Menu>
        </Sidebar>
    </PathContext.Provider>
};

export const SubMenu = ({ children, path, label, icon }) => {
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

export const MenuTab = ({path, label, icon = null }) => {
    const currentPath = useContext(PathContext);

    return <MenuItem active={isTabActive(path, currentPath)} component={<Link to={path} />} icon={icon}>
        { label }
    </MenuItem>
};
