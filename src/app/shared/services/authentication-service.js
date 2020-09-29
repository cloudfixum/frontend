import axios from 'axios';

const BASE = 'https://cloudfixum-api.herokuapp.com/';

export class AuthenticationService {
    async signin(userDataLog) {
        const userDataLogJson = JSON.stringify(userDataLog);
        const query = await axios.post(`${BASE}authenticate`, userDataLogJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async signup(user) {
        const userJson = JSON.stringify(user);
        const query = await axios.post(`${BASE}authenticate`, userJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }
}
