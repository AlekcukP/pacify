import React, { Fragment, useCallback } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/routes";
import Buttons from "./buttons";
import Logo from "../../common/logo";
import Footer from "../common/footer";
import Header from "../common/header";
import SignupForm from "./form";

import { useSelector, useDispatch } from 'react-redux';
import { setSignupStrategy } from "../../../store/signup";

const Signup = () => {
    const signupStrategy = useSelector(state => state.signup.strategy);
    const dispatch = useDispatch();


    return <Fragment>
        <Logo />

        <Header title={"Create an account"} subtext={"One last step before starting use an app"} />

        {!signupStrategy && <Buttons />}
        {signupStrategy && signupStrategy === 'password' && <SignupForm />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the
            <a href='#' className='link'> Terms and Conditions </a> and
            <a href='#' className='link'> Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            <Link to={ROUTES.LOOKUP} className='link' onClick={() => dispatch(setSignupStrategy(""))}> Log in </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default Signup;
