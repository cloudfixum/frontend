import template from './service-provider-profile.template';
import { useState, useEffect } from 'react';
import {UserApi} from '../../shared/services/user-api'

export default function ServiceProviderProfile() {
    const [user, setUser] = useState({});

    const [token, setToken] = useState('');

    let tokenObject = JSON.parse(localStorage.getItem('jwt'));

    useEffect(() => {
        setToken(tokenObject)
    },[]);

    const getUser = (e) => {
        console.log(token)
        new UserApi().getUserByToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZkBnbWFpbC5jb20iL…g2M30.oBDJ5SGFSaUrXXP-Wo4usT2VDVkBYfRI5J9xs3uca2c')
            .then( (res) => {
            })
            .catch((e) => {
                console.log(e)
            })
    }

    getUser()
    return template(token);
}
