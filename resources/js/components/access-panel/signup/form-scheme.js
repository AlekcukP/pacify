import { Collection } from "immutable";
import _ from 'lodash';
import Input from "../../common/forms/input";

export default Collection({
    scheme: "signup",
    rules: {
        email: ['required', 'max:255', 'email'],
        first_name: ['required', 'string', 'max:255', 'min:3'],
        last_name: ['required', 'string', 'max:255', 'min:3'],
        password: ['required', 'password'],
        password_confirmation: ['required', 'same:password'],
    },

    errorMessages: {
        email: "Invalid email address.",
        first_name: "Should be between 3 and 50 charachters.",
        last_name: "Should be between 3 and 50 charachters.",
        password: "Should be between 5 and 30 charachters.",
    },

    render: {
        classNames(name) {
            switch(name) {
                case 'first_name':
                case 'last_name':
                    return 'col-span-1';
                default:
                    return 'col-span-2';
            }
        }
    }
});
