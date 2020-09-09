import axios from 'axios'

const BASE = 'https://cloudfixum-api-dev.herokuapp.com/';

export class AuthenticationService{

    async singin(dni) {
        const dniJson = JSON.stringify(dni);
        const query = await axios.post(`${BASE}authenticate`, dniJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async singup(user) {
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
        if (localStorage.getItem('token')){
            return true;
        }
        return false;
    }
}