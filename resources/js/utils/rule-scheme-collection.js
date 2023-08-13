import { Collection } from "immutable";

const names = {
    signup: 'signup'
};

const schemes = {
    [names.signup]: {
        rules: {
            email: ['required', 'string', 'email'],
            first_name: ['required', 'string', 'max:255', 'min:3'],
            last_name: ['required', 'string', 'max:255', 'min:3'],
            password: ['required', 'string', 'min:8', 'max:30', 'password'],
            confirm_password: ['required', 'string', 'same:password'],
        },
        errorMessages: {
            email: "Invalid email address.",
            first_name: "Should be between 3 and 50 charachters.",
            last_name: "Should be between 3 and 50 charachters.",
            password: "Should be between 5 and 30 charachters.",
        }
    }
}

export default Collection(schemes);
export { names };
