import Service from "./service";
import { ROUTES } from "../constants/routes";
import { data } from "autoprefixer";

class SignupService extends Service{
    constructor() {
        super({baseUrl: '/api/signup'});
    }

    async submit(data) {
        const response = await this.post('/password', data);
        console.log(response);
    }
}