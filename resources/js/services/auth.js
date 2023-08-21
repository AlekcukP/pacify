import _ from "lodash";
import BaseService from "./base";
import { SubmissionError, reduxForm } from "redux-form";

class AuthService extends BaseService {
    constructor() {
        super();
    }

    async register(userData) {
        return this.post('/register', userData);
    }

    async login(userData) {
        return this.post('/login', userData);
    }
}

const authApi = new AuthService;

export default authApi;
