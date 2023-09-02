import React from "react";
import Image from "./Image";
import { useThemeState } from "../hooks/app/state";

const Logo = ({ width, className }) => {
    const { logo } = useThemeState();

    return <Image alt={"Pacify logo"} src={logo} width={width} className={className} />;
};

export default Logo;
