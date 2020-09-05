
import { useState } from 'react'
import ServicesApi from "../../../shared/services/services-api";

export default function CreateFormUserServiceProvider() {
    const values = {
        name: '',
        last_name: '',
        address: '',
        birth_date : '',
        email: '',
        dni: '',
        password: '',
        phone_number: '',
        profession: '',
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

}