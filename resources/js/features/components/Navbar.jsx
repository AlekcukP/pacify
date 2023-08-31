import React from "react";
import Image from "../../components/common/Image";
import ThemeToggle from "./ThemeToggle";
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
    return <nav className="navbar">
        <Image src={logo} alt="Logo" width={100}/>
        <ThemeToggle />
    </nav>;
};

export default Navbar;
