import _ from 'lodash';
import { SubmissionError } from "redux-form";
import Form, { createForm } from '../../../components/common/forms/form';
import { login } from "../../../api/auth";
import { setCredentials } from '../../../redux/auth';

export default createForm({
    form: "login",
    onSubmit: async (credentials, dispatch) => {
        const result = await dispatch(login(credentials)).unwrap();

        if (result?.errors) throw new SubmissionError(result.errors);

        dispatch(setCredentials({
            token: result.token,
            user: result.user
        }));
    },
    asyncBlurFields: ['email'],
    formFields: [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            className: 'basis-1/3'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            className: 'basis-1/3'
        },
    ],
    formButton: {
        label: 'Continue with Email',
        className: 'btn-primary h-11'
    },
    className: 'flex flex-col justify-between h-52'
})(Form);
