import _ from "lodash";
import BaseService from "./base";

class ValidateService extends BaseService {
    constructor() {
        super({
            headers: { 'Precognition': true }
        });
    }

    async send(form, values) {
        return this.post(
            this.getUri(form),
            values
        ).catch((error) => {
            throw error.response.data.errors;
        });
    }

    getUri(form) {
        return `/${form}`
    }
}

const validateApi = new ValidateService;

export default validateApi;
