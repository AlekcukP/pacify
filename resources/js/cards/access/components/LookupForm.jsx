import Form, { createForm } from '../../../components/forms/form';
import { useLookUp } from '../../../hooks/auth/actions';

export default createForm({
    form: "login",
    useOnSubmit: useLookUp,
    asyncBlurFields: ['email'],
    formFields: [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            className: 'basis-full'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            className: 'basis-full'
        },
    ],
    formButton: {
        label: 'Continue with Email',
        className: 'btn-primary h-11'
    },
    className: 'flex flex-wrap justify-between h-52'
})(Form);
