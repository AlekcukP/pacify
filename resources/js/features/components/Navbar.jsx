import React, { useCallback } from "react";
import { Dropdown, Navbar as ReactNavbar, Avatar } from 'flowbite-react';
import ThemeToggle from "./ThemeToggle";
import Image from "../../components/Image";
import logo from '../../../assets/images/logo.png';
import defaultProfile from '../../../assets/images/default_profile.svg';
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../redux/auth";

const Navbar = () => {
    const { Brand } = ReactNavbar;
    const { Header, Divider, Item } = Dropdown;
    const dispatch = useDispatch();
    const signOut = useCallback(() => dispatch(resetCredentials(), []));

    return (
        <ReactNavbar
            fluid
            rounded
            className="border-b-2 py-2"
        >
            <Brand href="#">
                <Image alt={"Logo"} src={logo} width={100} />
            </Brand>

            <div className="flex md:order-2">
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
