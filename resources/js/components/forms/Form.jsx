import React, { useContext } from 'react';
import _ from 'lodash';
import { ReduxFormContext, Form, reduxForm, Fields } from 'redux-form';
import Input from './Input';
import Button from './Button';
import { validate } from '../../api/validate';

const renderFields = (fields) => {
    const { formFields } = useContext(ReduxFormContext);

    return _.map(formFields, (field) => {
        const { value, onChange, onBlur, name } = fields[field.name].input;

        return <Input
            { ...field }
            meta={fields[field.name].meta}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
        />
    });
}

const FormFields = () => {
    const { formFields } = useContext(ReduxFormContext);
    const names = _.map(formFields, 'name');

    return <Fields names={names} component={renderFields}/>
};

const FormButton = ({ disabled }) => {
    const { formButton } = useContext(ReduxFormContext);
    const { label, className } = formButton;

    return <Button type={Button.types.submit} className={className} disabled={disabled}>{label}</Button>
};

const FormContext = props => {
    const reduxForm = useContext(ReduxFormContext);

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

const FormComponent = ({ handleSubmit, pristine }) => {
    const { className } = useContext(ReduxFormContext);

    return <FormContainer className={className} onSubmit={handleSubmit}>
        <FormFields />
        <FormButton disabled={pristine}/>
    </FormContainer>;
};

export const createForm = (config) => {
    const asyncValidate = async (values, dispatch) => {
        const { errors } = await dispatch(validate({form: config.form, values: values})).unwrap();
        if (errors) throw errors;
    }

    return reduxForm({
        shouldAsyncValidate: ({trigger, pristine, initialized}) => (
            (trigger === 'blur') || (trigger === 'submit' && (!pristine || !initialized))
        ),
        asyncValidate: asyncValidate,
        asyncChangeFields: [],
        ...config,
    });
};

export default FormComponent;
