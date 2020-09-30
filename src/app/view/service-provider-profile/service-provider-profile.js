import template from './service-provider-profile.template';
import { useState, useEffect } from 'react';
import { UserApi } from '../../shared/services/user-api';
import ServicesApi from '../../shared/services/services-api';

export default function ServiceProviderProfile() {
    const [user, setUser] = useState({});

    const [services, setServices] = useState([]);

    let tokenObject = JSON.parse(localStorage.getItem('jwt'));

    const [token, setToken] = useState(tokenObject['jwt']);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = (e) => {
        console.log(token);
        new UserApi()
            .getUserByToken(token)
            .then((res) => {
                setUser(res);
                localStorage.setItem('id', res.id);
                getJobsMyUser(res.id);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const getJobsMyUser = (id) => {
        new ServicesApi()
            .getJobsByUserId(id)
            .then((res) => {
                setServices(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return template(user, services);
}
