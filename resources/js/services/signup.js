import _ from "lodash";
import BaseService from "./base";

class SignupService extends BaseService {
    constructor() {
        super();
    }

    async create(userData) {
        return await this.put('/signup/create', userData);
    }
}

const SignupAPI = new SignupService;

export default SignupAPI;
