import axios from 'axios';

const BASE = 'https://cloudfixum-api.herokuapp.com/';

export class AuthenticationService {
    async signin(dni) {
        const dniJson = JSON.stringify(dni);
        const query = await axios.post(`${BASE}authenticate`, dniJson, {
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

    async isAuthenticated() {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }
}
