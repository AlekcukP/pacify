import React from 'react';
import _ from 'lodash';
import { ReduxFormContext, Form, reduxForm, SubmissionError } from 'redux-form';
import formValidator from '../../../utils/form-validator';

const FormContext = props => {
    const reduxForm = React.useContext(ReduxFormContext);

    return <ReduxFormContext.Provider
        {...props}
        value={{ ...reduxForm }}
    />;
};

const FormComponent = (props) => {
    const { children } = props;

    return <FormContext>
        <Form {...props}>
            { children }
        </Form>
    </FormContext>;
};

// const FormContainer = (props) => {
//     const { children } = props;

//     return <FormComponent {...props}>{ children }</FormComponent>
// };

export const createForm = (scheme, submitCallback) => {
    return reduxForm({
        form: scheme.getName(),
        scheme: scheme,
        validate: formValidator(scheme.compile()),
        onSubmit: async (data, dispatch) => {
            const res =  await dispatch(submitCallback(data));

            if (!res.meta.condition) {
                throw new SubmissionError(res.payload.errors);
            }
        },
        enableReinitialize: false,
        keepDirtyOnReinitialize: false,
        touchOnChange: false,
        touchOnBlur: false,
    });
};

export default FormComponent;

