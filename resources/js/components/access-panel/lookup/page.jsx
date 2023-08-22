import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ROUTES } from "../../../app/routes";
import Logo from "../../common/logo";
import Header from "../common/header";
import Footer from "../common/footer";
import LookupForm from "./form";
import Button from '../../common/forms/button';
import Divider from '../../common/divider';
import { Facebook } from "../common/icons";
import { Google } from "../common/icons";

const LookupPage = () => {
    const authenticated = useSelector(state => state.auth.user.authenticated);

    if (authenticated) {
        return <Navigate to={ROUTES.BASE}/>
    }

    return <Fragment>
        <Logo />

        <Header title={"Log in"} subtext={`Continue to ${__APP_NAME__}`}/>

        <LookupForm />

        <Divider text={"or"}/>

        <div className="mt-6">
            <Button className='btn-bordered' onClick={() => console.log('google sign up')}>
                <Google className='mr-3'/>
                <span>Continue with Google</span>
            </Button>
            <Button className='btn-bordered my-4' onClick={() => console.log('facebook sign up')}>
                <Facebook className='mr-3'/>
                <span>Continue with Facebook</span>
            </Button>
        </div>

        <div className='text-sm font-light'>
            <span>New to {__APP_NAME__}?</span>&nbsp;
            <Link to={ROUTES.SIGNUP} className='link'>Get started</Link>
        </div>

        <Footer />
    </Fragment>;
};

export default LookupPage;
