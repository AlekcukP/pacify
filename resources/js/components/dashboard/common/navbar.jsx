import React from "react";
import Logo from "../../common/logo";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
    return <nav className="navbar">
        <Logo />
        <ThemeToggle />
    </nav>;
};

export default Navbar;
