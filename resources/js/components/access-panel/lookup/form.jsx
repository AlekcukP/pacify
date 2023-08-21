import React from "react";
import _ from 'lodash';
import authApi from "../../../services/auth";
import { SubmissionError } from "redux-form";

import Form, { createForm } from "../../common/forms/form";

export default createForm({
    form: "login",
    onSubmit: async (data) => authApi.login(data).catch((error) => {
        throw new SubmissionError(error.response.data.errors);
    }),
    formClassName: 'grid grid-cols-1 grid-rows-3 gap-y-2',
    formFields: [
        {
            name: 'email',
            type: 'email',
            className: 'col-span-2'
        },
        {
            name: 'password',
            type: 'password',
            className: 'col-span-2'
        },
    ],
    formButton: {
        label: 'Continue with Email',
        className: 'btn-primary h-11'
    }
})(Form);
