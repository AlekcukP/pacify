import { SubmissionError } from "redux-form";
import Form , { createForm } from "../../../components/common/forms/form";
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
            className: 'col-span-2'
        },
        {
            name: 'first_name',
            label: 'First Name',
            className: 'col-span-1'
        },
        {
            name: 'last_name',
            label: 'Last Name',
            className: 'col-span-1'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            className: 'col-span-2'
        },
        {
            name: 'password_confirmation',
            type: 'password',
            label: 'Confirm Password',
            className: 'col-span-2'
        },
    ],
    formButton: {
        className: 'btn-primary col-span-2 h-11',
        label: 'Create an Account',
    },
    className: 'grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1'
})(Form);
