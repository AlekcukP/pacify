import axios from 'axios';

class Service {
    constructor (baseURL, headers = {}) {
        this.instance = axios.create({
            baseURL,
            headers: headers
        });
    }

    async get(url, config = {}) {
        try {
            const response = await this.instance.get(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(url, data, config = {}) {
        try {
            const response = await this.instance.post(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async put(url, data, config = {}) {
        try {
            const response = await this.instance.put(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete(url, config = {}) {
        try {
            const response = await this.instance.delete(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default Service;