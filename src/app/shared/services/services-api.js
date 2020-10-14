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

    async getServiceByText(text) {
        const query = await axios.get(`${BASE}service/${text}`);
        const data = query.data;
        return data;
    }

    async addService(service, token) {
        const serviceJson = JSON.stringify(service);
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        console.log(jwt['jwt']);

        const query = await axios.post(`${BASE}service`, serviceJson, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt['jwt']}`,
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

    async getServicesBySuperCategories(super_category) {
        const query = await axios.get(
            `${BASE}service/filter?superquery=${super_category}`
        );
        const data = query.data;
        return data;
    }

    async getServicesBySubCategoriesAndtext(
        super_category,
        sub_category,
        text
    ) {
        const query = await axios.get(
            `${BASE}service/filter?superquery=${super_category}?subquery=${sub_category}`
        );
        const data = query.data;
        return data;
    }

    async getJobsByUserId(id) {
        console.log(id);
        const query = await axios.get(`${BASE}user/${id}/jobs`);
        const data = query.data;
        return data;
    }
}
export default ServicesApi;
