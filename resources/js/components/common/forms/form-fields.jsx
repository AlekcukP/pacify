import React from "react";
import _ from 'lodash';
import { Fields, ReduxFormContext } from 'redux-form';
import Input from './input';

const renderFields = (fields) => {
    const { scheme } = React.useContext(ReduxFormContext);

    return _.map(scheme.properties, (field, name) => {
        return <Input
            className={scheme?.render?.classNames(name) ?? ''}
            name={name}

            input={fields[name].input}
            meta={fields[name].meta}
        />
    });
}

const FormFields = () => {
    const { scheme } = React.useContext(ReduxFormContext);

    return <Fields names={scheme.getFields()} component={renderFields}/>
};

export default FormFields;
