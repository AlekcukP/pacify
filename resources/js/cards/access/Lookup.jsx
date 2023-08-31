import React from "react";
import LogoCard from "./Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import LookupForm from "./components/LookupForm";
import Button from "../../components/common/forms/Button";
import Divider from "../../components/common/Divider";
import { Facebook } from "./components/Icons";
import { Google } from "./components/Icons";

const LookupCard = () => {

    return <LogoCard title={"Log in"} subtext={`Continue to ${__APP_NAME__}`}>
        <LookupForm />

        <Divider margin={20} text={"or"}/>

        <div>
            <Button className='btn-bordered' onClick={() => console.log('google sign up')}>
                <Google className='mr-3'/>
                <span>Continue with Google</span>
            </Button>
            <Button className='btn-bordered my-4' onClick={() => console.log('face sign up')}>
                <Facebook className='mr-3'/>
                <span>Continue with Facebook</span>
            </Button>
        </div>

        <div className='text-sm font-light'>
            <span>New to {__APP_NAME__}?</span>&nbsp;
            <Link to={ROUTES.SIGNUP} className='link'>Get started</Link>
        </div>

    </LogoCard>;
};

export default LookupCard;
