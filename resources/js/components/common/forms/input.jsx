import React from 'react';
import classNames from 'classnames';
import PasswordVisibilitySwitch from './password-visibility-switch';
import { Exclamation } from './icons';

const Input = ({ label, type, className, placeholder, input: { value, onChange, onBlur, name }, meta: { touched, error, valid } }) => {
    const Error = () => <p className="flex items-center text-red-600 tracking-[-.075em] text-xs absolute leading-none -bottom-3">
        <Exclamation className="mr-1"/>
        <span>{error}</span>
    </p>;

    const labelSign = _.isString(label) || label === false ? label : Input.nameToLabel(name);
    const inputType = type ?? Input.getTypeByName(name);
    const inputClassName = `input-${inputType}`;

    return (
        <div className={classNames(className, 'relative', {
            "mb-2": !valid && error && touched
        })}>
            {labelSign && <span className='text-gray-700 text-sm mb-1.5'>{labelSign}</span>}
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

Input.nameToLabel = (name) => {
    return _.startCase(name.replace(/_/g, ' '));
};

Input.getTypeByName = (name) => {
    return _.find(Input.validTypes, type => _.includes(name, type)) || Input.validTypes.text;
};

export default Input;
