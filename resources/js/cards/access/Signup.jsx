import React, { useState, Fragment } from "react";
import AccessCard from "./Access";
import SignupForm from "./components/SignupForm";
import Button from "../../components/forms/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";


const SignupCard = () => {
    const [showSignupForm, setShowSignupForm] = useState(false);

    return <AccessCard title={"Create an account"} subtext={"One last step before starting use an app"}>
        {!showSignupForm && <Fragment>
            <Button color={Button.colors.gray} outline={true} onClick={() => setShowSignupForm(true)}>
                <IoMail className='mr-2 h-5 w-5'/>
                <span>Continue with Email</span>
            </Button>
            <Button color={Button.colors.gray} outline={true} onClick={() => console.log('continue with google')}>
                <FcGoogle className='mr-2 h-5 w-5'/>
                <span>Continue with Google</span>
            </Button>
            <Button color={Button.colors.gray} outline={true} onClick={() => console.log('continue with facebook')}>
                <BiLogoFacebookCircle className='mr-2 h-5 w-5 text-blue-500'/>
                <span>Continue with Facebook</span>
            </Button>
        </Fragment>}

        {showSignupForm && <SignupForm />}

        <p className='text-sm font-light dark:text-gray-200'>
            <span>By proceeding, you agree to the&nbsp;</span>
            <a href='#' className='link'>Terms and Conditions</a>
            <span>&nbsp;and&nbsp;</span>
            <a href='#' className='link'>Privacy Policy</a>
        </p>

        <p className='text-sm font-light dark:text-gray-200'>
            <span>Already have an account?&nbsp;</span>
            <Link to={ROUTES.LOOKUP} className='link'>Log in</Link>
        </p>

    </AccessCard>;
};

export default SignupCard;
