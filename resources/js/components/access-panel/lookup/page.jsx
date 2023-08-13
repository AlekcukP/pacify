import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/routes";
import Logo from "../../common/logo";
import Header from "../common/header";
import Footer from "../common/footer";
import LookupForm from "./form";

const LookupPage = () => {
    return <Fragment>
        <Logo />

        <Header title={"Log in"} subtext={`Continue to ${__APP_NAME__}`}/>

        <LookupForm />

        <div className='text-sm font-light'>
            <span>New to {__APP_NAME__}?</span>
            <Link to={ROUTES.SIGNUP} className='link'> Get started </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default LookupPage;
