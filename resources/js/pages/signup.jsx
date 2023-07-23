import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Buttons from "../layouts/signup/buttons";
import Logo from "../layouts/logo";
import Footer from "../layouts/interactive/footer";
import Header from "../layouts/interactive/header";
import Form from "../layouts/signup/form";

const SignUp = () => {
    const [emailSignUp, setEmailSignUp] = useState(false);

    return <Fragment>
        <Logo />

        <Header title={"Create an account"} subtext={"One last step before starting use an app"}/>

        {!emailSignUp ? <Form /> : <Buttons />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the
            <a href='#' className='text-sky-500'> Terms and Conditions </a> and
            <a href='#' className='text-sky-500'> Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            <Link to={ROUTES.LOOKUP} className='text-sky-500' onClick={() => setEmailSignUp(false)}> Log in </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default SignUp;
