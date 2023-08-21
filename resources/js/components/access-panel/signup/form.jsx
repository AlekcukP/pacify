import React from "react";
import _ from 'lodash';
import authApi from "../../../services/auth";
import { SubmissionError } from "redux-form";
import Form , { createForm } from "../../common/forms/form";

export default createForm({
    form: "register",
    onSubmit: async (data) => authApi.register(data).catch((error) => {
        throw new SubmissionError(error.response.data.errors);
    }),
    asyncBlurFields: ['first_name', 'last_name', 'email'],
    formFields: [
        {
            name: 'email',
            type: 'email',
            className: 'col-span-2'
        },
        {
            name: 'first_name',
            className: 'col-span-1'
        },
        {
            name: 'last_name',
            className: 'col-span-1'
        },
        {
            name: 'password',
            type: 'password',
            className: 'col-span-2'
        },
        {
            name: 'password_confirmation',
            type: 'password',
            className: 'col-span-2'
        },
    ],
    formButton: {
        className: 'btn-primary col-span-2 h-11',
        label: 'Create an Account',
    },
    formClassName: 'grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1'
})(Form);
