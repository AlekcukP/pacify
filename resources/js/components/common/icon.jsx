import React, { Children } from 'react';
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';

// const Wrapper = ({ children, color, style, className, size, onClick }) => {
//     return <div className={className} style={style} onClick={onClick}>
//         {React.cloneElement(Children.only(children), {size, color})}
//     </div>;
// };

const Icon = ({ children, color, style, className, size, onClick, component: IconComponent }) => {
    return <IconContext.Provider value={{ color, size }}>
        <div className={className} style={style} onClick={onClick}>
            <IconComponent />
        </div>;
    </IconContext.Provider>;
};

Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
};

Icon.defaultProps = {
    color: '',
    size: 22,
    style: {},
    className: '',
};

export default Icon;
