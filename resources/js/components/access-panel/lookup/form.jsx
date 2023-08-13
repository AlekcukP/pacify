import React, { Fragment } from "react";
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form/immutable';

import Form from '../../common/forms/button';
import Divider from '../../common/divider';
import Button from '../../common/forms/button';
import Input from '../../common/forms/input';
import { Facebook } from "../common/icons";
import { Google } from "../common/icons";

import lookupFormScheme from './form-scheme';
import Validator from "../../../utils/validator";
import Scheme from "../../../utils/validate/schema";

const scheme = new Scheme(lookupFormScheme);

const LookupForm = ({ handleSubmit, pristine, reset, submitting }) => {

    // const inputs = _.reduce(scheme.properties, (formAcc, val, key) => {
    //     return _.concat(formAcc,
    //         <Field
    //             name={key}
    //             type={key}
    //             label={"Email"}
    //             placeholder={"Email"}
    //             component={(props) => <Input
    //                 { ...props }
    //                 className="mb-2"
    //             />}
    //         />
    //     );
    // }, []);

    return <Fragment>
        <Form onSubmit={handleSubmit}>
            {/* { inputs } */}
            <Button className="btn-primary" onClick={() => console.log('continue with email')}>
                Continue with Email
            </Button>
        </Form>

        <Divider margin={4} text={"or"}/>

        <div>
            <Button className='btn-bordered' onClick={() => console.log('google sign up')}>
                <Google className='mr-3'/>
                <span>Continue with Google</span>
            </Button>
            <Button className='btn-bordered my-4' onClick={() => console.log('facebook sign up')}>
                <Facebook className='mr-3'/>
                <span>Continue with Facebook</span>
            </Button>
        </div>
    </Fragment>
};

export default reduxForm({
    form: scheme.getName()
})(LookupForm);
