import { SubmissionError } from "redux-form";
import Form , { createForm } from "../../../components/forms/form";
import { register } from "../../../api/auth";
import { setCredentials } from '../../../redux/auth';

export default createForm({
    form: "register",
    onSubmit: async (userData, dispatch) => {
        const result = await dispatch(register(userData)).unwrap();

        if (result?.errors) throw new SubmissionError(result.errors);

        dispatch(setCredentials({
            token: result.token,
            user: result.user
        }));
    },
    asyncBlurFields: ['first_name', 'last_name', 'email'],
    formFields: [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            className: 'basis-full'
        },
        {
            name: 'first_name',
            label: 'First Name',
            className: 'basis-full md:flex-1 md:mr-1'
        },
        {
            name: 'last_name',
            label: 'Last Name',
            className: 'basis-full md:flex-1 md:ml-1'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            className: 'basis-full'
        },
        {
            name: 'password_confirmation',
            type: 'password',
            label: 'Confirm Password',
            className: 'basis-full'
        },
    ],
    formButton: {
        className: 'btn-primary h-11 mt-2',
        label: 'Create an Account',
    },
    className: 'flex flex-wrap h-96 md:128'
})(Form);
