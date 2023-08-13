import Validator from '../validator';
import _ from 'lodash';

class SchemaFieldProperties {
    static TYPE_REPLACMENTS = {
        "numeric": "number",
        "nullable": "null"
    };

    static STRING_VALUES_REPLACEMENTS = {
        "min": "minLength",
        "max": "maxLength"
    };

    #rules;
    type;

    constructor(fieldRules) {
        this.#rules = this.formatRules(fieldRules, SchemaFieldProperties.TYPE_REPLACMENTS);;
        this.type = this.extractType();

        this.setFormatIfProvided();
        this.cleanRules();
        this.defineProperties();
    }

    extractType() {
        return _.nth(_.intersection(Object.values(Schema.validTypes), this.#rules)) ?? Schema.validTypes.string;
    }

    setFormatIfProvided() {
        const format = this.extractFormat();

        if (format) {
            this.format = format;
        }
    }

    extractFormat() {
        const [format] = _.intersection(Validator.formats, this.#rules);
        return format;
    }

    defineProperties() {
        const rules = this.formatRules(this.#rules, SchemaFieldProperties.STRING_VALUES_REPLACEMENTS);

        _.forEach(rules, (rule) => {
            const [ruleName, ruleValue] = _.split(rule, ':');

            this[ruleName] = +ruleValue || ruleValue;
        });
    }

    cleanRules() {
        _.pull(this.#rules, this.type, this.format, Schema.validProperties.required);
    }

    formatRules(rules, replacements) {
        return _.map(rules, (rule) => {
            _.each(replacements, (replacement, pattern) => {
                rule = _.startsWith(rule, pattern) ? _.replace(rule, pattern, replacement) : rule
            })

            return rule;
        });
    }
}

class Schema {
    #rules;
    type;
    required;
    properties;
    errorMessage;
    patternProperties;
    additionalProperties;

    constructor(rulesSchema, errorMessages = {}, options = {}) {
        if (_.isEmpty(rulesSchema)) {
            throw new Error("Schema object is empty");
        }

        this.#rules = rulesSchema;

        this.type = Schema.validTypes.object;
        this.required = this.extractRequiredFields();
        this.properties = this.defineFieldProperties();
        this.errorMessage = errorMessages;
        this.patternProperties = {};
        this.additionalProperties = false;
    }

    extractRequiredFields() {
        return _.keys(_.pickBy(this.#rules, rules => _.includes(rules, Schema.validProperties.required)));
    }

    defineFieldProperties() {
        return _.reduce(this.#rules, (properties, fieldRules, fieldName) => {
            return {
                ...properties,
                [fieldName]: { ...new SchemaFieldProperties(fieldRules) }
            };
        }, {});
    }
}

Schema.validTypes = {
    object: 'object',
    string: 'string',
    number: 'number',
    array: 'array',
    boolean: 'boolean',
    integer: 'integer',
    null: 'null'
};

Schema.validProperties = {
    required: 'required'
};

export default function compileSchema(rulesSchema, errorMessages = {}) {
    return { ... new Schema(rulesSchema, errorMessages) };
};
