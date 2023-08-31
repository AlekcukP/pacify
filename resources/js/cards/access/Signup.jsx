import React, { useState } from "react";
import LogoCard from "./Logo";
import SignupForm from "./components/SignupForm";
import Button from "../../components/forms/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import { Mail } from "./components/Icons";
import { Google } from "./components/Icons";
import { Facebook } from "./components/Icons";


const SignupCard = () => {
    const [showSignupForm, setShowSignupForm] = useState(false);

    return <LogoCard title={"Create an account"} subtext={"One last step before starting use an app"}>
        {!showSignupForm && <div>
            <Button className='btn-bordered' onClick={() => setShowSignupForm(true)}>
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
        </div>}

        {showSignupForm && <SignupForm />}

        <div className='text-sm font-light mb-2'>
            By proceeding, you agree to the&nbsp;
            <a href='#' className='link'>Terms and Conditions</a>&nbsp;and&nbsp;
            <a href='#' className='link'>Privacy Policy</a>
        </div>

        <div className='text-sm font-light'>
            <span>Already have an account?</span>
            &nbsp;<Link to={ROUTES.LOOKUP} className='link' onClick={() => setShowSignupForm(false)}>Log in</Link>
        </div>

    </LogoCard>;
};

export default SignupCard;
