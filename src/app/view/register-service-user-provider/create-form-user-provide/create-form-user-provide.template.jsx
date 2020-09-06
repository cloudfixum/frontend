import React, { useEffect } from 'react';
import { Select, InputLabel, FormControl } from '@material-ui/core';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

import './create-form-user-provide.scss';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
    datauser_error_message,
    address_error_message,
    dni_error_message,
    phone_error_message,
} from '../error-message/error-message ';
import {
    datauser_validators_name,
    address_validators_name,
    dni_validators_name,
    phone_validators_name,
} from '../validators-name/validators-name';

export default (props) => {
    const serviceCategories = new ServiceCategories().getCategoriesOrdered();
    const handleChange = (e) => {
        e.preventDefault();
        props.setValuesForm({
            ...props.valuesForm,
            [e.target.name]: e.target.value,
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.createUser();
    };
    useEffect(() => {
        ValidatorForm.addValidationRule('isRequired', (value) => {
            if (value === '') {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('lengthValueDataUser', (value) => {
            if (value.length < 3 || value.length > 12) {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('lengthValueAddress', (value) => {
            if (value.length < 4 || value.length > 15) {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('lengthValueDni', (value) => {
            if (value.length == 8 && value > 1000000) {
                return false;
            }
            return true;
        });
        
        return () => {
            ValidatorForm.removeValidationRule('isRequired');
            ValidatorForm.removeValidationRule('lengthValueDataUser');
            ValidatorForm.removeValidationRule('lengthValueAddress');
            ValidatorForm.removeValidationRule('lengthValueUserDni');
        };
    }, []);

    return (
        <div className="container-form-user-provide">
            <h1>Register User Provider</h1>
            <ValidatorForm onSubmit={handleOnSubmit}>
                <div className="flex-row-center-center form-items" > 
                    <FormControl  className="container-form-double">
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
                    <FormControl  className="container-form-double">
                        <TextValidator
                            name="last_name"
                            fullWidth={true}
                            id="last_name"
                            label="Lastname"
                            variant="outlined"
                            onChange={handleChange}
                            value={props.valuesForm.last_name}
                            validators={datauser_validators_name}
                            errorMessages={datauser_error_message}
                            required
                        />
                    </FormControl>
                </div>

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="email"
                        fullWidth={true}
                        id="email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        value={props.valuesForm.email}
                        validators={['isEmail']}
                        errorMessages={['Email format incorrect']}
                        required
                    />
                </FormControl>

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="birth_date"
                        className="form-items"
                        type="date"
                        fullWidth={true}
                        id="birth_date"
                        onChange={handleChange}
                        value={props.valuesForm.birth_date}
                        variant="outlined"
                        required
                    />
                </FormControl>

                <FormControl  className="items-min-width ">
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

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="dni"
                        className="form-items"
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

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="address"
                        className="form-items"
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

                <FormControl  className="items-min-width form-items">
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

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="password"
                        className="form-items"
                        fullWidth={true}
                        id="password"
                        label="Password"
                        onChange={handleChange}
                        value={props.valuesForm.password}
                        type="password"
                        variant="outlined"
                        required
                    />
                </FormControl>

                <FormControl  className="items-min-width form-items">
                    <TextValidator
                        name="confirm-password"
                        className="form-items form-second"
                        fullWidth={true}
                        id="confirm-password"
                        onChange={handleChange}
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        required
                    />
                </FormControl>

                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button className="button-accent">Cancel</button>
                    <button className="button-primary">Create Service</button>
                </div>
            </ValidatorForm>
        </div>
    );
};