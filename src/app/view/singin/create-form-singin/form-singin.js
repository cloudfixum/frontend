import React from 'react';

import { useState } from 'react';
import { FormControl } from '@material-ui/core';
import { AuthenticationService } from '../../../shared/services/authentication-service';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import './form-singin.scss';

export default function FormSingIn() {
    const values = {
        email: '',
        password: '',
    };

    const [valuesForm, setValuesForm] = useState(values);

    let [isValidate, setIsValidate] = useState(true);

    const singinUser = (e) => {
        new AuthenticationService()
            .singin(valuesForm)
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
        valuesForm,
        setValuesForm,
        singinUser,
        isValidate,
    };

    const handleChange = (e) => {
        props.setValuesForm({
            ...props.valuesForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.singinUser();
    };

    return (
        <div className="container-form-singin">
            <h1>Sing In</h1>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
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
                        name="password"
                        fullWidth={true}
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={handleChange}
                        value={props.valuesForm.password}
                        required
                    />
                </FormControl>
                <button className="button button-primary">Sing In</button>
            </ValidatorForm>
        </div>
    );
}
