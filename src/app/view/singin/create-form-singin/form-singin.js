import {useState} from 'react'

import template from './form-singin.template'
import './form-singin.scss'
import {AuthenticationService} from "../../../shared/services/authentication-service";

export default function FormSingIn() {

    let [dni, setDni] = useState({dni: ''})

    let [isValidate, setIsValidate] = useState(true)

    const singinUser = () => {
        new AuthenticationService()
            .singin(dni)
            .then( (response) => {
                setIsValidate(true);
                localStorage.setItem('token', JSON.stringify(response));
                window.location = '/user/profile'
            })
            .catch( (e) => {
                console.log(e)
                setIsValidate(false);
            })
    }

    const props = {
        dni,
        setDni,
        singinUser,
        isValidate,
    }

    return template(props);
}