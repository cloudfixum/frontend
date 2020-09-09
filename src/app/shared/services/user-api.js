import axios from 'axios'

const BASE = 'https://cloudfixum-api-dev.herokuapp.com/api/';

export class UserApi{
    async getUserById(id) {
        const query = await axios.get(`${BASE}user/${id}`);
        const data = query.data;
        return data;
    }

}
