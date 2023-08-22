import _ from "lodash";
import BaseService from "./base";

class AuthService extends BaseService {
    constructor() {
        super();
    }

    async register(userData) {
        return this.post('/register', userData);
    }

    async login(userData) {
        return this.get('/sanctum/csrf-cookie').then(response => {
            return this.get('/login', { params: {
                data: btoa(JSON.stringify(userData)),
            }});
        });
    }
}

const authApi = new AuthService;

export default authApi;
