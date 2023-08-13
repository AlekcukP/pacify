import _ from 'lodash';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addKeywords from 'ajv-keywords';
import addFormats from "ajv-formats";

import compileSchema from './validate/schema';

class Validator {
    static customKeywords = [
        {
            keyword: 'same',
            type: 'string',
            schema: true,
            validate: function (schema, data, parentSchema, dataCxt) {
                return _.isEqual(dataCxt.parentData[schema], data)
            },
            error: {
                message: (context) => {
                    return `Should be equal to ${_.upperFirst(context.schema)} field`
                }
            }
        }
    ];

    constructor(scheme, errorMessages = {}) {
        if (_.isEmpty(scheme)) {
            throw new Error("Scheme not found.");
        }

        this.scheme = compileSchema(scheme, errorMessages);

        this.validateLib = new Ajv({
            allErrors: true,
            strict: false,
        });

        this.addExtensions();
        this.addCustomKeywords();

        this.validate = this.validateLib.compile(this.scheme);
    }

    addExtensions() {
        addFormats(this.validateLib, Validator.formats);
        addKeywords(this.validateLib);
        addErrors(this.validateLib);
    }

    addCustomKeywords() {
        _.each(Validator.customKeywords, keyword => this.validateLib.addKeyword(keyword));
    }

    errors() {
        return this.validate.errors;
    }
}

Validator.formats = ['email', 'password'];

export default Validator;