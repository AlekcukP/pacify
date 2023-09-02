import React, { useCallback } from "react";
import { Dropdown, Navbar as ReactNavbar, Avatar } from 'flowbite-react';
import BurgerMenu from "./BurgerMenu";
import Image from "../../components/Image";
import Logo from "../../utils/Logo";
import logo from '../../../assets/images/logo.png';
import defaultProfile from '../../../assets/images/default_profile.svg';
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../redux/auth";
import { DarkThemeToggle } from 'flowbite-react';

const Navbar = () => {
    const { Brand } = ReactNavbar;
    const { Header, Divider, Item } = Dropdown;
    const dispatch = useDispatch();
    const signOut = useCallback(() => dispatch(resetCredentials(), []));

    return (
        <ReactNavbar fluid rounded className="border-b-2 py-2">
            <Brand className="hidden sm:block">
                <Logo width={100} />
            </Brand>

            <BurgerMenu/>

            <div className="flex justify-between w-24 md:order-2">
                <DarkThemeToggle theme={{root: { icon: 'w-6 h-6' }}}/>
                <Dropdown
                    inline
                    arrowIcon={false}
                    label={<Avatar alt="User settings" img={defaultProfile} rounded />}
                >
                    <Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Header>

                    <Item>Profile</Item>
                    <Item>Settings</Item>
                    <Divider />
                    <Item onClick={signOut}>Sign out</Item>
                </Dropdown>
            </div>
        </ReactNavbar>
    );
};

    export default Navbar;
