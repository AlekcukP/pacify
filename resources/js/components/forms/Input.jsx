import React, { useId } from 'react';
import { Label as TextInputLabel, TextInput } from 'flowbite-react';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useComponentsState } from '../../hooks/components/state';
import { useDisplayPassword, useHidePassword } from '../../hooks/components/actions';
import { classnames } from 'tailwindcss-classnames';

const theme = {
    field: {
        rightIcon: {
            base: classnames('absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer')
        }
    }
};

const Label = ({ sign, htmlFor }) => {
    return <div className="block">
        <TextInputLabel
            htmlFor={htmlFor}
            value={sign}
        />
    </div>
};

const Error = ({ error }) => <p className="flex items-center tracking-[-.075em] text-xs -mt-1">
    <BsFillExclamationCircleFill size={12} className="mr-1"/>
    <span>{error}</span>
</p>;

const PasswordIcon = () => {
    const { isPasswordDisplayed } = useComponentsState();
    const displayPassword = useDisplayPassword();
    const hidePassword = useHidePassword();

    if (isPasswordDisplayed) return <AiFillEye className='text-gray-400' size={20} onClick={hidePassword} />;

    return <AiFillEyeInvisible className='text-gray-400' size={20} onClick={displayPassword}/>;
};

const isPassword = (type) => type === Input.types.password;

const getColor = (dirty, valid) => {
    switch (true) {
        case dirty && !valid:
            return Input.colors.failure;
        case dirty && valid:
            return Input.colors.success;
        default:
            return Input.colors.gray;
    }
}

const getType = (type, displayed) => {
    switch (true) {
        case isPassword(type) && displayed:
            return Input.types.text;
        case isPassword(type) && !displayed:
            return Input.types.password;
        case _.includes(Input.types, type):
            return type;
        default:
            return Input.types.text;
    }
}

const Input = ({
    type = Input.types.text,
    label = null,
    size = Input.sizes.md,
    meta = {},
    className,
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    icon,
    rightIcon,
}) => {
    const { isPasswordDisplayed } = useComponentsState();
    const { error, valid, dirty } = meta;
    const id = useId();

    return <div className={className}>
        {label && <Label sign={label} htmlFor={id}/>}
        <TextInput
            sizing={size}
            color={getColor(dirty, valid)}
            helperText={dirty && error && <Error error={error} />}
            type={getType(type, isPasswordDisplayed)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            onBlur={onBlur}
            id={id}
            icon={icon}
            rightIcon={isPassword(type) ? PasswordIcon : rightIcon}
            theme={theme}
        />
    </div>
};

Input.types = {
    text: 'text',
    email: 'email',
    password: 'password'
};

Input.sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

Input.colors = {
    gray: 'gray',
    info: 'info',
    failure: 'failure',
    warning: 'warning',
    success: 'success'
};

export default Input;
