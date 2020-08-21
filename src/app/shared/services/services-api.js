import axios from 'axios';
const BASE = 'https://cloudfixum-api-dev.herokuapp.com/api/';

class ServicesApi {
    async getServices() {
        const query = await axios.get(`${BASE}service`);
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
}
export default ServicesApi;
