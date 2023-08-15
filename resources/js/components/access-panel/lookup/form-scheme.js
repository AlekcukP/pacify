import { Collection } from "immutable";
import _ from 'lodash';

export default Collection({
    scheme: "lookup",
    rules: {
        email: ['required', 'email'],
        password: [],
    },

    errorMessages: {
        email: "Invalid email address.",
        password: "Password incorrect.",
}
});
