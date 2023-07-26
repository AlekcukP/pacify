import React from "react";
import Logo from "../logo";
import ThemeToggle from "../../widgets/theme-toggle";

const Navbar = () => {
    return <nav className="navbar">
        <Logo />
        <ThemeToggle />
    </nav>;
};

export default Navbar;
