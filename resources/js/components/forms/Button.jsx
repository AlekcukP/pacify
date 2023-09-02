import React from 'react';
import { Button as ReactButton } from 'flowbite-react';

const Button = ({color, onClick, style, className, disabled, children, type, outline, fullSized }) => {
    return <ReactButton
        type={type}
        onClick={onClick}
        style={style}
        disabled={disabled}
        outline={outline}
        fullSized={fullSized}
        color={color}
        className={className}
    >
        { children }
    </ReactButton>;
};

Button.types = {
    button: 'button',
    submit: 'submit'
};

Button.colors = {
    dark: 'dark',
    failure: 'failure',
    gray: 'gray',
    info: 'info',
    light: 'light',
    purple: 'purple',
    success: 'success',
    warning: 'warning'
};

Button.sizes = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl'
};

export default Button;
