import axios from 'axios';

class BaseService {
    constructor () {
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;

        this.request = axios.create({
            withCredentials: true,
            headers: {
                'X-CSRF-TOKEN': this.csrf
            },
            baseURL: '',
        });
    }

    async get(url, config = {}) {
        return await this.request.get(url, data, config);
    }

    async post(url, data, config = {}) {
        return await this.request.post(url, data, config);
    }

    async put(url, data, config = {}) {
        return await this.request.put(url, data, config);
    }

    async delete(url, config = {}) {
        return await this.request.delete(url, data, config);
    }
}

export default BaseService;
