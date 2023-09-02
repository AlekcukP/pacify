import React from "react";
import { useTheme } from "flowbite-react";
import Image from "../components/Image";
import darkLogo from "../../assets/images/logo.svg";
import whiteLogo from "../../assets/images/white-logo.svg";

const Logo = ({ width, className }) => {
    const { mode } = useTheme();
    const appLogo = mode === 'dark' ? whiteLogo : darkLogo;

    return <Image alt={"Pacify logo"} src={appLogo} width={width} className={className} />;
};

export default Logo;
