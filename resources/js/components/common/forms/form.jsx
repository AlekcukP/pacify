import React from 'react';
import _ from 'lodash';
import { ReduxFormContext, Form, reduxForm, Fields, SubmissionError } from 'redux-form';
import Input from './input';
import Button from './button';
import validateApi from '../../../services/validate';

const renderFields = (fields) => {
    const { formFields } = React.useContext(ReduxFormContext);

    return _.map(formFields, (field) => {
        return <Input
            { ...field }
            input={fields[field.name].input}
            meta={fields[field.name].meta}
        />
    });
}

const FormFields = () => {
    const { formFields } = React.useContext(ReduxFormContext);
    const names = _.map(formFields, 'name');

    return <Fields names={names} component={renderFields}/>
};

const FormButton = ({ disabled }) => {
    const { formButton } = React.useContext(ReduxFormContext);
    const { label, className } = formButton;

    return <Button type={Button.validTypes.submit} className={className} disabled={disabled}>{label}</Button>
};

const FormContext = props => {
    const reduxForm = React.useContext(ReduxFormContext);

    return <ReduxFormContext.Provider
        {...props}
        value={{ ...reduxForm }}
    />;
};

const FormContainer = (props) => {
    const { children } = props;

    return <FormContext>
        <Form {...props}>
            { ...children }
        </Form>
    </FormContext>;
};

const FormComponent = ({ handleSubmit, invalid, pristine }) => {
    const { formClassName } = React.useContext(ReduxFormContext);

    return <FormContainer className={formClassName} onSubmit={handleSubmit}>
        <FormFields />
        <FormButton disabled={pristine}/>
    </FormContainer>;
};

export const createForm = (config) => {
    const { form } = config;

    return reduxForm({
        ...config,
        shouldAsyncValidate: ({trigger, pristine, initialized}) => {
            return (trigger === 'blur') || (trigger === 'submit' && (!pristine || !initialized));
        },
        asyncValidate: async (values) => validateApi.send(form, values),
        asyncChangeFields: [],
    });
};

export default FormComponent;

