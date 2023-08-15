import { Collection } from "immutable";

export default Collection({
    scheme: "signup",
    rules: {
        email: ['required', 'max:255', 'email'],
        first_name: ['required', 'string', 'max:255', 'min:3'],
        last_name: ['required', 'string', 'max:255', 'min:3'],
        password: ['required', 'password'],
        confirm_password: ['required', 'same:password'],
    },

    errorMessages: {
        email: "Invalid email address.",
        first_name: "Should be between 3 and 50 charachters.",
        last_name: "Should be between 3 and 50 charachters.",
        password: "Should be between 5 and 30 charachters.",
    }
});
