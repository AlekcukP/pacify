import React, { Fragment, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ROUTES } from "../../../app/routes";
import Buttons from "./buttons";
import Logo from "../../common/logo";
import Footer from "../common/footer";
import Header from "../common/header";
import SignupForm from "./form";

import { useDispatch } from 'react-redux';
import { setSignupStrategy } from "../../../redux/auth";
import { useAuth } from "../../../hooks/useAuth";

const Signup = () => {
    const { user, strategy } = useAuth();
    const dispatch = useDispatch();

    if (user) {
        return <Navigate to={ROUTES.BASE}/>
    }

    return <Fragment>
        <Logo />

        <Header title={"Create an account"} subtext={"One last step before starting use an app"} />

        {!strategy && <Buttons />}
        {strategy === 'password' && <SignupForm />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the&nbsp;
            <a href='#' className='link'>Terms and Conditions</a>&nbsp;and&nbsp;
            <a href='#' className='link'>Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            &nbsp;<Link to={ROUTES.LOOKUP} className='link' onClick={() => dispatch(setSignupStrategy(""))}>Log in</Link>
        </div>

        <Footer />
    </Fragment>;
};

export default Signup;
