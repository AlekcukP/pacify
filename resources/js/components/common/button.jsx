import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, style, className, disabled, children }) => {
    return <button
        onClick={onClick}
        style={style}
        className={classNames(className, disabled && 'btn-disabled')}
        disabled={disabled}
    >
        { children }
    </button>
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    icon: PropTypes.element,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    content: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.element
    ])
};

Button.defaultProps = {
    style: {},
    className: '',
    icon: null,
    disabled: false
};

export default Button;
