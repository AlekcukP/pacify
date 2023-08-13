import React from "react";
import _ from 'lodash';
import classNames from "classnames";
import { Field, reduxForm } from 'redux-form/immutable';
import { SHA256 } from 'crypto-js';


import Button from '../../common/forms/button';
import Input from '../../common/forms/button';
import Form from '../../common/forms/button';

import schemeCollection, { names as schemeNames } from "../../../utils/rule-scheme-collection";
import Validator from "../../../utils/validator";
import compileSchema from "../../../utils/validate/schema";

import SchemaUtils from "../../../utils/schema-utils";

const SignupForm = ({ handleSubmit, pristine, reset, submitting }) => {
    // const hashedPassword = SHA256(plaintextPassword).toString();
    const {rules, errorMessages} = schemeCollection.get(schemeNames.signup);
    const validator = new Validator(rules, errorMessages);



    const signupScheme = compileSchema(rules, errorMessages);

    const signupInputs = _.reduce(signupScheme.properties, (formAcc, val, key) => {
        return _.concat(formAcc,
            <Field
                name={key}
                type={SchemaUtils.getInputType(key)}
                label={SchemaUtils.getLabelName(key)}
                component={
                    <Input
                    className={classNames(SchemaUtils.getInputClassName(key))}
                    error={errors[key]?.message}
                />
                }
            />
        );
    }, []);

    return <Form className='grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1' onSubmit={handleSubmit}>
        {signupInputs}
        <Button className="btn-primary col-span-2 h-12" type="submit" disabled={pristine || submitting}>Create an Account</Button>
    </Form>;
};

export default reduxForm({
    form: "signup"
})(SignupForm);
