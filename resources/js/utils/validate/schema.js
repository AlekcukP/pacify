import _ from 'lodash';
import SchemaFieldProperties from './schema-field-properties';

class Schema {
    #name;
    #rules;
    #rulesErrorMessages;

    type;
    required;
    properties;
    errorMessage;
    patternProperties;
    additionalProperties;

    constructor(rulesSchemeCollection, options = {}) {
        this.defineRulesSchemeProperties(rulesSchemeCollection);

        this.type = Schema.validTypes.object;
        this.required = this.extractRequiredFields();
        this.properties = this.defineFieldProperties();
        this.errorMessage = {
            properties: { ...this.getRulesErrorMessages() }
        };
        this.patternProperties = {};
        this.additionalProperties = false;
    }

    defineRulesSchemeProperties(rulesScheme) {
        this.#name = rulesScheme.get("scheme");
        this.#rules = rulesScheme.get("rules");
        this.#rulesErrorMessages = rulesScheme.get("errorMessages") || {};
    }

    compile() {
        return { ...this };
    }

    getFields() {
        return _.keys(this.properties);
    }

    getName() {
        return this.#name;
    }

    getRulesErrorMessages() {
        return this.#rulesErrorMessages;
    }

    extractRequiredFields() {
        return _.keys(_.pickBy(this.#rules, rules => _.includes(rules, Schema.validProperties.required)));
    }

    defineFieldProperties() {
        return _.reduce(
            this.#rules,
            (fieldProps, fieldRules, fieldName) => _.merge(fieldProps, {[fieldName] : { ...new SchemaFieldProperties(fieldRules)}}),
            {}
        );
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

export default Schema;
