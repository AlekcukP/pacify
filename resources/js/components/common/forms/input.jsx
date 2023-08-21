import React from 'react';
import PasswordVisibilitySwitch from './password-visibility-switch';
import { Exclamation } from './icons';

const Input = ({ label, type, className, placeholder, input: { value, onChange, onBlur, name }, meta: { touched, error, valid } }) => {
    const Error = () => <p className="flex items-center text-red-600 tracking-[-.075em] text-xs leading-none my-0.5">
        <Exclamation className="mr-1"/>
        <span>{error}</span>
    </p>;


    const labelSign = label ?? name;
    const inputType = type ?? Input.getTypeByName(name);
    const inputClassName = `input-${inputType}`;

    return (
        <div className={className}>
            {labelSign && <span className='text-gray-700 text-sm mb-1.5'>{Input.formatLabel(labelSign)}</span>}
            <div className='relative h-11'>
                <input
                    className={inputClassName}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    onBlur={onBlur}
                />
                {inputType === Input.validTypes.password && <PasswordVisibilitySwitch />}
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

Input.formatLabel = (name) => {
    return _.startCase(name.replace(/_/g, ' '));
};

Input.getTypeByName = (name) => {
    return _.find(Input.validTypes, type => _.includes(name, type)) || Input.validTypes.text;
};

export default Input;
