import ServicesApi from '../../../shared/services/services-api';
import { useState } from 'react';

import React, { useEffect } from 'react';
import { FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

import './create-form-user-provide.scss';

import {
    datauser_error_message,
    address_error_message,
    dni_error_message,
    phone_error_message,
    password_error_message,
    confirm_password_error_message,
} from '../error-message/error-message ';
import {
    datauser_validators_name,
    address_validators_name,
    dni_validators_name,
    phone_validators_name,
    password_validators_name,
    confirm_password_validators_name,
} from '../validators-name/validators-name';

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
        password: '',
        confirm_password: '',
    };

    const [valuesForm, setValuesForm] = useState(values);

    let pass = '';

    const createUser = (e) => {
        new ServicesApi()
            .addUserServiceProvider(valuesForm)
            .then((r) => {
                localStorage.setItem('token', JSON.stringify(r));
                window.location = '/user/profile';
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
    const handleChange = (e) => {
        e.preventDefault();
        props.setValuesForm({
            ...props.valuesForm,
            [e.target.name]: e.target.value,
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(props.valuesForm.password);
        //props.createUser();
    };

    useEffect(() => {
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

        ValidatorForm.addValidationRule('lengthValuePassword', (value) => {
            if (value.length > 7 && value.length < 45) {
                pass = value;
                return true;
            } else {
                return false;
            }
        });

        ValidatorForm.addValidationRule('confirmPassword', (value) => {
            console.log(pass);
            if (value !== pass) {
                return false;
            } else {
                return true;
            }
        });

        return () => {
            ValidatorForm.removeValidationRule('isRequired');
            ValidatorForm.removeValidationRule('lengthValueDataUser');
            ValidatorForm.removeValidationRule('lengthValueAddress');
            ValidatorForm.removeValidationRule('lengthValueUserDni');
            ValidatorForm.removeValidationRule('lengthValuePassword');
            ValidatorForm.removeValidationRule('confirmPassword');
        };
    }, []);

    return (
        <div className="container-form-user-provider">
            <h1>Register User Provider</h1>
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
                            value={props.valuesForm.name}
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
                            value={props.valuesForm.last_name}
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
                        value={props.valuesForm.email}
                        validators={['isEmail']}
                        errorMessages={'wrong format, need example@example.com'}
                        required
                    />
                </FormControl>

                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="birthday"
                        type="date"
                        fullWidth={true}
                        id="birthday"
                        onChange={handleChange}
                        value={props.valuesForm.birthday}
                        variant="outlined"
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
                        value={props.valuesForm.phone_number}
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
                        value={props.valuesForm.dni}
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
                        value={props.valuesForm.address}
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
                        value={props.valuesForm.location}
                        validators={datauser_validators_name}
                        errorMessages={datauser_error_message}
                        required
                    />
                </FormControl>
                <div className="flex-row-center-center item-password">
                    <FormControl className="container-form-double">
                        <TextValidator
                            name="password"
                            fullWidth={true}
                            type="password"
                            id="password"
                            label="Password"
                            variant="outlined"
                            onChange={handleChange}
                            value={props.valuesForm.password}
                            validators={password_validators_name}
                            errorMessages={password_error_message}
                            required
                        />
                    </FormControl>
                    <FormControl className="container-form-double">
                        <TextValidator
                            name="confirm_password"
                            type="password"
                            fullWidth={true}
                            id="confirm_password"
                            label="Confirm Password"
                            variant="outlined"
                            value={props.valuesForm.confirm_password}
                            validators={confirm_password_validators_name}
                            errorMessages={confirm_password_error_message}
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                </div>

                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button className="button-accent" type="button">
                        <Link to="/">Cancel</Link>
                    </button>
                    <button className="button-primary">Register</button>
                </div>
            </ValidatorForm>
        </div>
    );
}
