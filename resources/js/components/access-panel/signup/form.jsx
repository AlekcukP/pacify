import _ from 'lodash';
import { SubmissionError } from "redux-form";
import Form , { createForm } from "../../common/forms/form";
import { useRegisterMutation } from '../../../api/auth';

const useFormActions = () => {
    const [register] = useRegisterMutation();

    return {
        onSubmit: (data) => register(data),
        // onSuccess: () => console.log('here'),
        // onError: () => {}
    };
};

export default createForm({
    form: "register",
    useFormActions: useFormActions,
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
    className: 'grid grid-cols-2 grid-rows-5 gap-y-2 gap-x-1'
})(Form);
