import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PasswordVisibilitySwitch from './password-visibility-switch';
import { Exclamation } from './icons';

const Input = ({ label, type, className, input, placeholder, value, onChange, onBlur, name, meta, ref }) => {
    const { touched, error, valid } = meta;

    const Error = () => <p className="flex items-center text-red-600 text-sm absolute">
        <Exclamation className="mr-2"/>
        <span>{error.message}</span>
    </p>;

    return (
        <div className={classNames(className, {
            "mb-6": !valid && error && touched
        })}>
            {label && <span className='text-gray-700 text-sm mb-1.5'>{label}</span>}
            <div className='relative h-12'>
                <input
                    className={`input-${type}`}
                    type={type}
                    placeholder={placeholder}
                    {...input}
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
