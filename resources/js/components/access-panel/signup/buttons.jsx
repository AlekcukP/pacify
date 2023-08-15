import React, { Fragment } from "react";
import Button from "../../common/forms/button";
import { Mail } from "../common/icons";
import { Google } from "../common/icons";
import { Facebook } from "../common/icons";

import { useDispatch } from 'react-redux';
import { setSignupStrategy } from "../../../store/auth";

const Buttons = () => {
    const dispatch = useDispatch();

    return <Fragment>
        <Button className='btn-bordered' onClick={() => dispatch(setSignupStrategy("password"))}>
            <Mail className='mr-3'/>
            <span>Continue with Email</span>
        </Button>
        <Button className='btn-bordered my-4' onClick={() => console.log('continue with google')}>
            <Google className='mr-3'/>
            <span>Continue with Google</span>
        </Button>
        <Button className='btn-bordered my-4' onClick={() => console.log('continue with facebook')}>
            <Facebook className='mr-3'/>
            <span>Continue with Facebook</span>
        </Button>
    </Fragment>
};

export default Buttons;
