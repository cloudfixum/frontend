import { useState } from 'react';

import template from './form-signin.template';
import './form-signin.scss';
import { AuthenticationService } from '../../../shared/services/authentication-service';

export default function FormSignin() {
    let [dni, setDni] = useState({ dni: '' });

    let [isValidate, setIsValidate] = useState(true);

    const signinUser = () => {
        new AuthenticationService()
            .signin(dni)
            .then((response) => {
                setIsValidate(true);
                localStorage.setItem('token', JSON.stringify(response));
                window.location = '/user/profile';
            })
            .catch((e) => {
                console.log(e);
                setIsValidate(false);
            });
    };

    const props = {
        dni,
        setDni,
        signinUser,
        isValidate,
    };

    return template(props);
}
