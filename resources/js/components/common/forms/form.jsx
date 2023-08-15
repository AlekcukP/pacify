import React from 'react';
import _ from 'lodash';
import { ReduxFormContext, Form } from 'redux-form';
// import Validator from '../../../utils/validator';

const FormContext = props => {
    const reduxForm = React.useContext(ReduxFormContext);

    return (
        <ReduxFormContext.Provider
            {...props}
            value={{ ...reduxForm }}
        />
    );
};

const FormComponent = (props) => {
    const { children } = props;

    return <FormContext>
        <Form {...props}>
            { children }
        </Form>
    </FormContext>;
};

// FormComponent.validator = Validator ???

export default FormComponent

