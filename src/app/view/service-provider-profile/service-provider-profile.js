import template from './service-provider-profile.template';
import {useState, useEffect} from 'react'

import ServicesApi from '../../shared/services/services-api'

export default function ServiceProviderProfile() {

    const servicesApi = new ServicesApi();

    const [user, setUser] = useState({})

    useEffect( () => {
            servicesApi.getUserById(1)
            .then( r => {
                setUser(r)
            })
            .catch( e => {
                console.log(e)
            });
    }, [])

    return template(user);
}
