import _ from 'lodash';
import Input from '../../common/forms/input';

const fieldRenderHelper = {
    inputType(fieldName) {
        const patterns = [
            { pattern: '^.*email$', value: 'email' },
            { pattern: '^.*password$', value: 'password' },
        ];

        const matchingPattern = patterns.find(patternObj => new RegExp(patternObj.pattern, 'i').test(fieldName));

        return matchingPattern ? matchingPattern.value : Input.validTypes.text;
    },

    labelName(fieldName) {
        return _.startCase(fieldName.replace(/_/g, ' '));
    },

    classNames(fieldName) {
        const patterns = [
            { pattern: '^.*name$', value: 'col-span-1' },
        ];

        const matchingPattern = patterns.find(patternObj => new RegExp(patternObj.pattern, 'i').test(fieldName));

        return matchingPattern ? matchingPattern.value : 'col-span-2';
    }
};

export default fieldRenderHelper;