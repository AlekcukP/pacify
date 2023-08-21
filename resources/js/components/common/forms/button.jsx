import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, style, className, disabled, children, type, name, id }) => {
    return <label style={style} className={classNames(className, disabled && 'btn-disabled')}>
        { children }
        <input className='w-0 h-0 invisible' type={type} onClick={onClick} disabled={disabled} id={id} name={name}/>
    </label>
};

Button.validTypes = {
    button: 'button',
    submit: 'submit'
};

export default Button;
