import axios from 'axios';

const BASE = 'https://cloudfixum-api-dev.herokuapp.com/';

export class UserApi {
    async getUserByToken(token) {
        const query = await axios.get(`${BASE}currentuser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = query.data;
        return data;
    }
}
