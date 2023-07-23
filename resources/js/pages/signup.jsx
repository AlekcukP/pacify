import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Buttons from "../layouts/signup/buttons";
import Logo from "../layouts/logo";
import Footer from "../layouts/interactive/footer";
import Form from "../layouts/signup/form";

const SignUp = () => {
    const [emailSignUp, setEmailSignUp] = useState(false);

    return <Fragment>
        <Logo />

        <div className='my-6'>
            <h2 className="text-3xl font-medium">Create an account</h2>
            <p className='mb-4 text-lg text-gray-500 font-extralight'>One last step before starting use an app</p>
        </div>

        {emailSignUp ? <Form /> : <Buttons />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the
            <a href='#' className='text-sky-500'>Terms and Conditions</a> and
            <a href='#' className='text-sky-500'>Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            <Link to={ROUTES.LOOKUP} className='text-sky-500' onClick={() => setEmailSignUp(false)}> Log in </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default SignUp;
