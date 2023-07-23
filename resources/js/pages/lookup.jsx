import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { APP_NAME } from "../constants/env-variables";
import Logo from "../layouts/logo";
import Header from "../layouts/interactive/header";
import Footer from "../layouts/interactive/footer";
import Form from "../layouts/lookup/form";

const LookUp = () => {
    return <Fragment>
        <Logo />

        <Header title={"Log in"} subtext={`Continue to ${APP_NAME}`}/>

        <Form />

        <div className='text-sm font-light'>
            <span>New to {APP_NAME}?</span>
            <Link to={ROUTES.SIGNUP} className='text-sky-500'> Get started </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default LookUp;
