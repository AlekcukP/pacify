import React from "react";
import Image from "./Image";
import { useLogo } from "../hooks/useCommon";

const Logo = ({ width, className }) => {
    const logo = useLogo();

    return <Image alt={"Pacify logo"} src={logo} width={width} className={className} />;
};

export default Logo;
