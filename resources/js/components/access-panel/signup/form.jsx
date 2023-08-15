import React from "react";
import _ from 'lodash';
import { reduxForm, SubmissionError} from 'redux-form';
import { createUser } from "../../../store/auth";

import Form from "../../common/forms/form";
import Button from '../../common/forms/button';
import FormFields from "../../common/forms/form-fields";

import formValidator from "../../../utils/form-validator";
import signupFormScheme from './form-scheme';
import Schema from "../../../utils/validate/schema";

const scheme = new Schema(signupFormScheme);

const SignupForm = ({ handleSubmit, invalid, pristine }) => {
    return <Form className='grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1' onSubmit={handleSubmit}>
        <FormFields />
        <Button className="btn-primary col-span-2 h-11" type="submit" disabled={pristine}>Create an Account</Button>
    </Form>
};

export default reduxForm({
    form: scheme.getName(),
    validate: formValidator(scheme.compile()),
    onSubmit: async (values, dispatch) => {
        const res =  await dispatch(createUser(values));

        if (!res.meta.condition) {
            throw new SubmissionError(res.payload.errors);
        }
    },
    scheme: scheme,
    enableReinitialize: false,
    keepDirtyOnReinitialize: false,
    touchOnChange: false,
    touchOnBlur: false,
})(SignupForm);
