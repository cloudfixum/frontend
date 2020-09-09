import template from './service-provider-profile.template';
import { useState, useEffect } from 'react';

export default function ServiceProviderProfile() {
    const [user, setUser] = useState({});

    let userObject = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        setUser(userObject);
    }, []);

    return template(user);
}
