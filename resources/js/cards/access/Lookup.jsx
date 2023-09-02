import React from "react";
import AccessCard from "./Access";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import LookupForm from "./components/LookupForm";
import Button from "../../components/forms/Button";
import Divider from "../../components/Divider";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const LookupCard = () => {

    return <AccessCard title={"Log in"} subtext={`Continue to Pacify`}>
        <LookupForm />

        <Divider margin={20} text={"or"}/>

        <Button color={Button.colors.gray} outline={true} onClick={() => console.log('google sign up')}>
            <FcGoogle className='mr-2 h-5 w-5'/>
            <span>Continue with Google</span>
        </Button>

        <Button color={Button.colors.gray} outline={true} onClick={() => console.log('face sign up')}>
            <BiLogoFacebookCircle className='mr-2 h-5 w-5 text-blue-500'/>
            <span>Continue with Facebook</span>
        </Button>

        <p className='text-sm font-light dark:text-gray-200'>
            <span>New to Pacify?</span>&nbsp;
            <Link to={ROUTES.SIGNUP} className='link'>Get started</Link>
        </p>

    </AccessCard>;
};

export default LookupCard;
