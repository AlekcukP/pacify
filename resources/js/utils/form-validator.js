import _ from 'lodash';

import Validator from "./validator";

export default function formValidator(scheme) {
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
            }
        });

        return _.reduce(errors, (previous, error) => {
            const path = error.instancePath.substring(1).replace(/\//g, '.');

            if (!previous[path]) {
                previous[path] = {
                    message: error.message,
                    type: error.keyword,
                };
            }

            return previous;
        }, {});
    };
};
