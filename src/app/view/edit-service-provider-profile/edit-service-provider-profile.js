import ServicesApi from '../../shared/services/services-api';
import React, { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { FormControl } from '@material-ui/core';
import {
    address_validators_name,
    datauser_validators_name,
    dni_validators_name,
    phone_validators_name,
} from '../register-service-user-provider/validators-name/validators-name';
import {
    address_error_message,
    datauser_error_message,
    dni_error_message,
    phone_error_message,
} from '../register-service-user-provider/error-message/error-message';
import { Link } from 'react-router-dom';

const parseDate = (date, separator) => {
    let inputDate = date.split(separator);
    let day = inputDate[2];
    let month = inputDate[1];
    let year = inputDate[0];
    return { day, month, year };
};

export default function EditServiceProviderProfile() {
    const values = {
        name: '',
        last_name: '',
        address: '',
        email: '',
        dni: '',
        phone_number: '',
        location: '',
    };

    const [user, setUser] = useState(values);
    let userId = JSON.parse(localStorage.getItem('id'));

    const getUser = () => {
        new ServicesApi()
            .getUserById(userId)
            .then((res) => {
                let date = parseDate(res.birthday);
                res.birthday = date.year + '-' + date.month + '-' + date.day;
                setUser(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(getUser(), []);

    const minimumYearsInMilliseconds = 5.676e11;

    const editUser = (e) => {
        new ServicesApi()
            .editUserServiceProvider(user)
            .then((r) => {
                window.location = '/user/profile';
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let date = parseDate(user.birthday, '-');
        user.birthday = date.year + '-' + date.month + '-' + date.day;
        setUser(user);
        editUser();
    };

    ValidatorForm.addValidationRule('isRequired', (value) => {
        if (value === '') {
            return false;
        }
        return true;
    });

    ValidatorForm.addValidationRule('lengthValueDataUser', (value) => {
        if (value.length < 3 || value.length > 40) {
            return false;
        }
        return true;
    });

    ValidatorForm.addValidationRule('lengthValueAddress', (value) => {
        if (value.length < 6 || value.length > 40) {
            return false;
        }
        return true;
    });

    ValidatorForm.addValidationRule('lengthValueDni', (value) => {
        if (value.length > 7 && value > 1000000) {
            return true;
        } else {
            return false;
        }
    });

    ValidatorForm.addValidationRule('date', (value) => {
        let date = parseDate(value, '-');
        if (
            new Date().getTime() -
                new Date(date.year, date.month, date.day).getTime() <
            minimumYearsInMilliseconds
        ) {
            return false;
        } else {
            return true;
        }
    });
    return (
        <div className="container-form-user-provider">
            <h1>Edit User Provider</h1>
            <ValidatorForm onSubmit={handleOnSubmit}>
                <div className="flex-row-center-center form-items">
                    <FormControl className="container-form-double">
                        <TextValidator
                            name="name"
                            fullWidth={true}
                            id="name"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            value={user.name}
                            validators={datauser_validators_name}
                            errorMessages={datauser_error_message}
                            required
                        />
                    </FormControl>
                    <FormControl className="container-form-double">
                        <TextValidator
                            name="last_name"
                            fullWidth={true}
                            id="last_name"
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange}
                            value={user.last_name}
                            validators={datauser_validators_name}
                            errorMessages={datauser_error_message}
                            required
                        />
                    </FormControl>
                </div>

                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="email"
                        fullWidth={true}
                        id="email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.email}
                        validators={['isEmail']}
                        errorMessages={'wrong format, need example@example.com'}
                        required
                    />
                </FormControl>

                <FormControl className="items-min-width ">
                    <TextValidator
                        name="phone_number"
                        className="form-items form-second"
                        fullWidth={true}
                        id="phone_number"
                        label="Phone Number"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.phone_number}
                        validators={phone_validators_name}
                        errorMessages={phone_error_message}
                        required
                    />
                </FormControl>

                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="dni"
                        fullWidth={true}
                        id="dni"
                        label="DNI Number"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.dni}
                        validators={dni_validators_name}
                        errorMessages={dni_error_message}
                        required
                    />
                </FormControl>

                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="address"
                        fullWidth={true}
                        id="address"
                        label="Address"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.address}
                        validators={address_validators_name}
                        errorMessages={address_error_message}
                        required
                    />
                </FormControl>

                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="location"
                        className="form-items form-second"
                        fullWidth={true}
                        id="location"
                        label="Location"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.location}
                        validators={datauser_validators_name}
                        errorMessages={datauser_error_message}
                        required
                    />
                </FormControl>

                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button className="button-accent" type="button">
                        <Link to="/">Cancel</Link>
                    </button>
                    <button className="button-primary">Edit</button>
                </div>
            </ValidatorForm>
        </div>
    );
}
