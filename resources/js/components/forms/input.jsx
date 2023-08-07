import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { INPUT_TYPES } from '../../constants/components';
import { Exclamation, Eye, InvisisbleEye } from '../icons/forms';

const Input = forwardRef(({ label, value, onChange, error, type, placeholder, className, name, id, onBlur }, ref) => {
    const [inputType, setInputType] = useState(type);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showPaswword = () => {
        setInputType(INPUT_TYPES.TEXT);
        setPasswordVisible(true);
    };
    const hidePaswword = () => {
        setInputType(INPUT_TYPES.PASSWORD);
        setPasswordVisible(false);
    };

    const EyeIcon = () => passwordVisible ? <Eye onClick={hidePaswword}/> : <InvisisbleEye onClick={showPaswword}/>;

    const Error = () => <p className="flex items-center text-red-600 text-sm absolute">
        <Exclamation className="mr-2"/>
        {error}
    </p>;

    return (
        <div className={classNames(className, error && "mb-6")}>
            {label && <span className='text-gray-700 text-sm mb-1.5'>{label}</span>}
            <div className='relative h-12'>
                <input
                    className={`input-${type}`}
                    type={inputType}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    id={id}
                    onBlur={onBlur}
                    onChange={onChange}
                    ref={ref}
                />
                {type === INPUT_TYPES.PASSWORD && <EyeIcon />}
            </div>
            {error && <Error />}
        </div>
    );
});

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    required: false,
    label: '',
    error: '',
    placeholder: '',
    className: '',
    name: null,
    id: null,
};

export default Input;
