import React, { useCallback } from 'react';
import { Label as TextInputLabel, TextInput } from 'flowbite-react';
import { Exclamation } from './Icons';
import { v4 as uuidv4 } from 'uuid';
import { Eye, InvisisbleEye } from './Icons';
import { useCommon } from '../../hooks/useCommon';
import { setPasswordDisplay } from '../../redux/common';
import { useDispatch } from 'react-redux';
import { classnames } from 'tailwindcss-classnames';

const Label = ({ sign, htmlFor }) => {
    return <div className="block">
        <TextInputLabel
            htmlFor={htmlFor}
            value={sign}
        />
    </div>
};

const Error = ({ error }) => <p className="flex items-center tracking-[-.075em] text-xs">
    <Exclamation className="mr-1"/>
    <span>{error}</span>
</p>;

const PasswordIcon = () => {
    const { isPasswordDisplayed } = useCommon();
    const dispatch = useDispatch();

    const showPassword = useCallback(() => {
        dispatch(setPasswordDisplay(true));
    }, []);

    const hidePassword = useCallback(() => {
        dispatch(setPasswordDisplay(false));
    }, []);

    if (isPasswordDisplayed) return <Eye onClick={hidePassword} />;

    return <InvisisbleEye onClick={showPassword}/>;
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
    id = uuidv4(),
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
    const { isPasswordDisplayed } = useCommon();
    const { error, valid, dirty } = meta;

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
            theme={Input.theme}
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

Input.theme = {
    field: {
        rightIcon: {
            base: classnames('absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer')
        }
    }
};

export default Input;
