import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Logo from "../layouts/logo";
import Footer from "../layouts/interactive/footer";
import Form from "../layouts/lookup/form";

const LookUp = () => {
    return <Fragment>
        <Logo />

        <div className='my-8'>
            <h2 className="text-3xl font-medium">Log in</h2>
            <p className='mb-4 text-lg text-gray-500 font-extralight'>Continue to Up Shopper</p>
        </div>

        <Form />

        <div className='text-sm font-light'>
            <span>New to Up Shopper?</span>
            <Link to={ROUTES.SIGNUP} className='text-sky-500'> Get started </Link>
        </div>

        <Footer />
    </Fragment>;
};

export default LookUp;
