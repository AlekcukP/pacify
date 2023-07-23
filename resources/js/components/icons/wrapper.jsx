import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children, color, style, className, size, onClick }) => {
    return <div className={className} style={style} onClick={onClick}>
        {React.cloneElement(Children.only(children), {size, color})}
    </div>;
};

Wrapper.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
};

Wrapper.defaultProps = {
    color: '',
    size: 22,
    style: {},
    className: '',
};

export default Wrapper;
