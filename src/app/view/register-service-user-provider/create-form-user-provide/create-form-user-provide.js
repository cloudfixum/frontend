import template from './create-form-user-provide.template';
import ServicesApi from "../../../shared/services/services-api";
import {useState} from "react";

export default function CreateFormUserProvider() {
    const values = {
        name: '',
        last_name: '',
        address: '',
        birth_date : '',
        email: '',
        dni: '',
        password: '',
        phone_number: '',
        location: ''
    };

    const createUser = (e) => {
        new ServicesApi()
            .addUserServiceProvider(valuesForm)
            .then(r => {
                window.location('/user')
            })
            .catch(e => {
                console.log(e)
            });
    }

    const [valuesForm , setValuesForm ] = useState(values);

    const props = {
        valuesForm,
        setValuesForm,
        createUser
    }
    return template(props);
}
