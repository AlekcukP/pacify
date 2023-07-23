import React from "react";
import { useLocation } from "react-router-dom";
import { Home, Customer, Analytics, Marketing, Discount, Circle } from "../../components/icons/sidebar";
import { SidebarMenu, SubMenu, MenuTab } from "../../components/sidebar";
import { ROUTES } from "../../constants/routes";

const Sidebar = () => {
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

export default Sidebar;
