import _ from 'lodash';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addKeywords from 'ajv-keywords';
import addFormats from "ajv-formats";

class Validator {
    constructor(scheme) {
        if (_.isEmpty(scheme)) {
            throw new Error("Scheme not found.");
        }

        this.scheme = scheme;

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
        _.each(Validator.keywords, keyword => this.validateLib.addKeyword(keyword));
    }

    errors() {
        return this.validate.errors;
    }
}

Validator.formats = ['email', 'password'];
Validator.keywords = [
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

export default Validator;

export const formValidator = (scheme) => {
    return (values) => {
        const validator = new Validator(scheme);

        if (_.isEmpty(values)) {
            return {};
        }

        const success = validator.validate(values);

        if (success) {
            return {};
        }

        const errors = validator.errors();

        _.forEach(errors, (error) => {
            if (error.keyword === 'required') {
                error.instancePath += '/' + error.params.missingProperty;
                error.message = 'Field is required.';
            }
        });

        return _.reduce(errors, (previous, error) => {
            const path = error.instancePath.substring(1).replace(/\//g, '.');

            if (!previous[path]) {
                previous[path] = error.message;
            }

            return previous;
        }, {});
    };
};
