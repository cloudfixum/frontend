import template from './service-provider-profile.template';

import ServicesApi from "../../../shared/services/services-api";

export default function ServiceProviderProfile() {
    const values = {
        id: 1,
    };

    const getUser = (e) => {
        new ServicesApi()
            .getUserById(values.id)
            .then( r => {
                console.log("Success")
            })
            .catch( e => {
                console.log(e)
            });
    }

    const props = {
        getUser
    }

    return template(props);
}
