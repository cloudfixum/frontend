import React from 'react';

import { useState } from 'react';
import { FormControl } from '@material-ui/core';
import { AuthenticationService } from '../../../shared/services/authentication-service';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import './form-signin.scss';

export default function FormSignIn() {
    const values = {
        username: '',
        password: '',
    };

    const [valuesForm, setValuesForm] = useState(values);

    let [isValidate, setIsValidate] = useState(true);

    const signinUser = (e) => {
        new AuthenticationService()
            .signin(valuesForm)
            .then((response) => {
                localStorage.setItem('jwt', JSON.stringify(response))
                console.log(localStorage.getItem('jwt'))
                window.location = '/user/profile';
                /*
                setIsValidate(true);
                localStorage.setItem('token', JSON.stringify(response));
                window.location = '/user/profile';
                */
            })
            .catch((e) => {
                console.log(e);
                setIsValidate(false);
            });
    };

    const props = {
        valuesForm,
        setValuesForm,
        signinUser,
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
        props.signinUser();
    };

    return (
        <div className="container-form-signin">
            <h1>Sign In</h1>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="username"
                        fullWidth={true}
                        id="username"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        value={props.valuesForm.username}
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
                <button className="button button-primary">Sign In</button>
            </ValidatorForm>
        </div>
    );
}
