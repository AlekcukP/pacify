import Form , { createForm } from "../../../components/forms/form";
import { useSignUp } from "../../../hooks/auth/actions";

export default createForm({
    form: "register",
    useOnSubmit: useSignUp,
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
