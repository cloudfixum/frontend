import axios from 'axios';

const BASE = 'https://cloudfixum-api-dev.herokuapp.com/';

export class UserApi {
    async getUserByToken(token) {
        console.log(token);
        const query = await axios.get(`${BASE}currentuser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = query.data;
        console.log(data);
        return data;
    }
}
