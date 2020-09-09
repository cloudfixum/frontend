import template from '../register-service-user-provider/create-form-user-provide/create-form-user-provide.template'
import ServicesApi from "../../shared/services/services-api";
import {useEffect, useState} from "react";

export default function EditServiceProviderProfile() {
    const values = {
        id: '',
        name: '',
        last_name: '',
        address: '',
        birthday: '',
        email: '',
        dni: '',
        phone_number: '',
        location: '',
    };

    const [user, setUser] = useState(values);

    let userObject = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        setUser(userObject)
    }, []);

    const editUser = (e) => {
        new ServicesApi()
            .editUserServiceProvider(user)
            .then((r) => {
                window.location='/user/profile'
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const props = {
        valuesForm: user,
        setValuesForm: setUser,
        createUser: editUser
    }

    return template(props);
}