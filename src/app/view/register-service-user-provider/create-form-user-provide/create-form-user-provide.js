import template from './create-form-user-provide.template';
import ServicesApi from '../../../shared/services/services-api';
import { useState } from 'react';

export default function CreateFormUserProvider() {
    const values = {
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        email: '',
        dni: '',
        phone_number: '',
        location: '',
    };

    const [valuesForm, setValuesForm] = useState(values);

    const createUser = (e) => {
        new ServicesApi()
            .addUserServiceProvider(valuesForm)
            .then((r) => {
                console.log('Success!');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const props = {
        valuesForm,
        setValuesForm,
        createUser,
    };

    return template(props);
}
