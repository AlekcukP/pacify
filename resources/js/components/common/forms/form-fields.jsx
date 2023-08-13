import React from "react";
import _ from 'lodash';
import { Fields, ReduxFormContext } from 'redux-form';
import Input from './input';

const renderFields = (fields) => {
    const { scheme, fieldRenderHelper } = React.useContext(ReduxFormContext);

    return _.map(scheme.properties, (field, name) => {
        return <Input
            type={fieldRenderHelper ? fieldRenderHelper.inputType(name) : Input.validTypes.text}
            label={fieldRenderHelper ? fieldRenderHelper.labelName(name) : null}
            className={fieldRenderHelper && fieldRenderHelper.classNames(name)}
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
