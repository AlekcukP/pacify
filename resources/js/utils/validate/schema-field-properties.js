import _ from 'lodash';
import Schema from './schema';
import Validator from '../validator';

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

export default SchemaFieldProperties;
