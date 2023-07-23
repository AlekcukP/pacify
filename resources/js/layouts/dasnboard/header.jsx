import React from "react";
import Logo from "../logo";
import ThemeToggle from "../../widgets/theme-toggle";

const Header = () => {
    return <header className="flex items-center h-14 py-1 px-3 border-b border-gray-300">
        <Logo />
        <ThemeToggle />
    </header>;
};

export default Header;
