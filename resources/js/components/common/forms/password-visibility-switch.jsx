import React, { Fragment, useCallback } from "react";
import { Eye, InvisisbleEye } from './icons';
import Input from "./input";

import { useDispatch, useSelector } from 'react-redux';
import { togglePasswordVisibility } from "../../../redux/components";

const PasswordVisibilitySwitch = () => {
    const dispatch = useDispatch();
    const passwordVisible = useSelector(state => state.components.passwordVisible);

    const toggleVisibility = useCallback(() => {
        dispatch(togglePasswordVisibility());

        document.querySelectorAll('.input-password')?.forEach((input) => {
            input.type = input.type === Input.validTypes.text  ? Input.validTypes.password
                : Input.validTypes.text
        });
    }, []);

    return <Fragment>
        <div onClick={toggleVisibility}> {passwordVisible ? <Eye /> : <InvisisbleEye />} </div>
    </Fragment>;
};

export default PasswordVisibilitySwitch;