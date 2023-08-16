import _ from "lodash";
import BaseService from "./base";

class AuthService extends BaseService {
    constructor() {
        super();
    }

    async register(userData) {
        return await this.post('/register', userData);
    }

    async login(userData) {
        return await this.post('/login', userData);
    }
}

const AuthAPI = new AuthService;

export default AuthAPI;
