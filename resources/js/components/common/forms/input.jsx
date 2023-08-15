import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PasswordVisibilitySwitch from './password-visibility-switch';
import { Exclamation } from './icons';

const Input = ({ label, type, className, placeholder, input: { value, onChange, onBlur, name }, meta: { touched, error, valid } }) => {
    const Error = () => <p className="flex items-center text-red-600 tracking-[-.075em] text-xs absolute">
        <Exclamation className="mr-1"/>
        <span>{error}</span>
    </p>;

    return (
        <div className={classNames(className, {
            "mb-3": !valid && error && touched
        })}>
            {label && <span className='text-gray-700 text-sm mb-1.5'>{label}</span>}
            <div className='relative h-12'>
                <input
                    className={`input-${type}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    onBlur={onBlur}
                />
                {type === Input.validTypes.password && <PasswordVisibilitySwitch />}
            </div>
            {touched && error && <Error />}
        </div>
    );
};

Input.validTypes = {
    text: 'text',
    email: 'email',
    password: 'password'
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.oneOf(Object.values(Input.validTypes)),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
};

Input.defaultProps = {
    type: Input.validTypes.text,
    required: false,
    label: '',
    error: '',
    placeholder: '',
    className: '',
    name: null,
    id: null,
};

export default Input;
