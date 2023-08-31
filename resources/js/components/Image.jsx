import React from "react";

const Image = ({ className, alt, src, width }) => {
    return <div className={className}>
        <img alt={alt} src={src} width={width}/>
    </div>
};

export default Image;
