import axios from 'axios';

class BaseService {
    constructor (config = {}) {
        this.request = axios.create({
            ...config,
            withCredentials: true,
            baseURL: '/api'
        });
    }

    get(url, config = {}) {
        return this.request.get(url, config);
    }

    post(url, data, config = {}) {
        return this.request.post(url, data, config);
    }

    put(url, data, config = {}) {
        return this.request.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.request.delete(url, data, config);
    }
}

export default BaseService;
