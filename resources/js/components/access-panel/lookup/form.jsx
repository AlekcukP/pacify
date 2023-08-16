import React from "react";
import _ from 'lodash';
import { login } from "../../../store/auth";

import Form, { createForm } from "../../common/forms/form";
import FormFields from '../../common/forms/form-fields';
import Button from '../../common/forms/button';

import lookupFormScheme from './form-scheme';
import Schema from "../../../utils/validate/schema";

const scheme = new Schema(lookupFormScheme);

const LookupForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return <Form className="grid grid-cols-1 grid-rows-3 gap-y-2" onSubmit={handleSubmit}>
        <FormFields />
        <Button className="btn-primary h-11" type="submit" disabled={pristine}>
            Continue with Email
        </Button>
    </Form>
};

export default createForm(scheme, login)(LookupForm);
