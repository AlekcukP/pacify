import axios from 'axios';

class BaseService {
    constructor () {
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.config = {
            withCredentials: true,
            headers: {
                'X-CSRF-TOKEN': this.csrf
            }
        };

        this.request = axios.create({
            ...this.config,
            baseURL: '',
        });
    }

    async get(url, config = {}) {
        try {
            const response = await this.request.get(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(url, data, config = {}) {
        try {
            const response = await this.request.post(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async put(url, data, config = {}) {
        return await this.request.put(url, data, config);
    }

    async delete(url, config = {}) {
        try {
            const response = await this.request.delete(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default BaseService;
