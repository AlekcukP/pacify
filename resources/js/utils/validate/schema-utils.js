import _ from 'lodash';


class SchemaUtils {
    static getInputType(fieldName) {
        const patterns = [
            { pattern: '^.*email$', value: 'email' },
            { pattern: '^.*password$', value: 'password' },
        ];

        const matchingPattern = patterns.find(patternObj => new RegExp(patternObj.pattern, 'i').test(fieldName));

        return matchingPattern ? matchingPattern.value : "text";
    }

    static getLabelName(fieldName) {
        return _.startCase(fieldName.replace(/_/g, ' '));
    }

    static getInputClassName(fieldName) {
        const patterns = [
            { pattern: '^.*name$', value: 'col-span-1' },
        ];

        const matchingPattern = patterns.find(patternObj => new RegExp(patternObj.pattern, 'i').test(fieldName));

        return matchingPattern ? matchingPattern.value : 'col-span-2';
    }
}

export default SchemaUtils;
