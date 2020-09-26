import axios from 'axios';
const BASE = 'https://cloudfixum-api.herokuapp.com/api/';

class ServicesApi {
    async getServices() {
        const query = await axios.get(`${BASE}service`);
        const data = query.data;
        return data;
    }

    async getServiceById(id) {
        const query = await axios.get(`${BASE}service/${id}`);
        const data = query.data;
        return data;
    }

    async addService(service) {
        const serviceJson = JSON.stringify(service);
        const query = await axios.post(`${BASE}service`, serviceJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async getServiceForPagination(page) {
        return await axios.get(`${BASE}service?page=${page}`);
    }

    async addUserServiceProvider(user) {
        const userJson = JSON.stringify(user);
        const query = await axios.post(`${BASE}user`, userJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async editUserServiceProvider(user) {
        const userJson = JSON.stringify(user);
        const query = await axios.put(`${BASE}user`, userJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async getUserById(id) {
        const query = await axios.get(`${BASE}user/${id}`);
        const data = query.data;
        return data;
    }

    async getServicesBySuperCategories() {
        const query = await axios.get(`${BASE}`);
        const data = query.data;
        return data;
    }
}
export default ServicesApi;
