import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Buttons from "../layouts/signup/buttons";
import Logo from "../layouts/logo";
import Footer from "../layouts/interactive/footer";
import Header from "../layouts/interactive/header";
import Form from "../layouts/signup/form";

const Signup = () => {
    const [emailSignup, setEmailSignup] = useState(false);

    return <Fragment>
        <Logo />

        <Header title={"Create an account"} subtext={"One last step before starting use an app"}/>

        {emailSignup ? <Form /> : <Buttons />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the
            <a href='#' className='link'> Terms and Conditions </a> and
            <a href='#' className='link'> Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            <Link to={ROUTES.LOOKUP} className='link' onClick={() => setEmailSignup(false)}> Log in </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default Signup;
