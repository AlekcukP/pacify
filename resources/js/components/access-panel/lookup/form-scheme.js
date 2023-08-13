import { Collection } from "immutable";

export default Collection({
    scheme: "lookup",
    rules: {
        email: ['required', 'string', 'email'],
    },

    errorMessages: {
        email: "Invalid email address.",
}
});
