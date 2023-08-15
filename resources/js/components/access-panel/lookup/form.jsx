import React from "react";
import _ from 'lodash';
import { reduxForm } from 'redux-form';

import Form from "../../common/forms/form";
import FormFields from '../../common/forms/form-fields';
import Button from '../../common/forms/button';

import formValidator from "../../../utils/form-validator";
import lookupFormScheme from './form-scheme';
import Schema from "../../../utils/validate/schema";

const scheme = new Schema(lookupFormScheme);

const LookupForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return <Form onSubmit={handleSubmit}>
        <FormFields />
        <Button className="btn-primary" type="submit" disabled={pristine}>
            Continue with Email
        </Button>
    </Form>
};

export default reduxForm({
    form: scheme.getName(),
    validate: formValidator(scheme.compile()),
    // onSubmit: async (values, dispatch) => {
    //     const res =  await dispatch(createUser(values));

    //     if (!res.meta.condition) {
    //         throw new SubmissionError(res.payload.errors);
    //     }
    // },
    enableReinitialize: false,
    keepDirtyOnReinitialize: false,
    touchOnChange: false,
    touchOnBlur: false,
    scheme: scheme,
})(LookupForm);
