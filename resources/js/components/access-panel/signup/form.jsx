import React, { useCallback } from "react";
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { submitForm } from "../../../store/signup";

import Form from "../../common/forms/form";
import Button from '../../common/forms/button';
import FormFields from "../../common/forms/form-fields";

import formValidator from "../../../utils/form-validator";
import signupFormScheme from './form-scheme';
import Schema from "../../../utils/validate/schema";

import fieldRenderHelper from "./form-render-helper";

const scheme = new Schema(signupFormScheme);

const SignupForm = ({ handleSubmit }) => {
    const dispatch = useDispatch();

    const submitSignupForm = useCallback((payload) => dispatch(submitForm(payload)), []);

    return <Form className='grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1' onSubmit={handleSubmit(submitSignupForm)}>
            <FormFields />
            <Button className="btn-primary col-span-2 h-12" type="submit">Create an Account</Button>
        </Form>
};

export default reduxForm({
    form: scheme.getName(),
    validate: formValidator(scheme.compile()),
    enableReinitialize: false,
    keepDirtyOnReinitialize: false,
    touchOnChange: false,
    touchOnBlur: false,
    scheme: scheme,
    fieldRenderHelper: fieldRenderHelper
})(SignupForm);
