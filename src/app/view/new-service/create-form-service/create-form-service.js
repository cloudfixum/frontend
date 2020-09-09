import template from './create-form-service.template';

import { useState } from 'react';
import ServicesApi from '../../../shared/services/services-api';

export default function CreateFormServices() {
    const values = {
        title: '',
        category: '',
        description: '',
        base_price: 0,
        serviceProvider: JSON.parse(localStorage.getItem('token')),
    };

    const [valuesForm, setValuesForm] = useState(values);

    const createService = (e) => {
        new ServicesApi()
            .addService(valuesForm)
            .then((res) => {
                window.location = '/';
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const props = {
        valuesForm,
        setValuesForm,
        createService,
    };

    return template(props);
}
