import React, { useEffect } from 'react';
import { Select, InputLabel, FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { ServiceCategories } from '../../../shared/utils/constant/service-categories';
import {
    title_error_message,
    description_error_message,
    price_error_message,
} from '../error-message/error-message';
import {
    title_validators_name,
    description_validators_name,
    price_validators_name,
} from '../validators-name/validators-name';

import './create-form-service.scss';

export default (props) => {
    const serviceCategories = new ServiceCategories().getCategoriesOrdered();
    const handleChange = (e) => {
        props.setValuesForm({
            ...props.valuesForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createService();
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isRequired', (value) => {
            if (value === '') {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('lengthValue', (value) => {
            if (value.length < 5 || value.length > 50) {
                return false;
            }

            return true;
        });

        ValidatorForm.addValidationRule('maxLengthDescription', (value) => {
            if (value.length > 256) {
                return false;
            }

            return true;
        });

        return () => {
            ValidatorForm.removeValidationRule('isRequired');
            ValidatorForm.removeValidationRule('lengthValue');
            ValidatorForm.removeValidationRule('maxLengthDescription');
        };
    }, []);

    return (
        <div className="container-form-create-service">
            <h1>Create new service</h1>
            <ValidatorForm
                className="flex-column-center-center"
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        label="Service name"
                        type="text"
                        id="title"
                        name="title"
                        variant="outlined"
                        fullWidth={true}
                        onChange={handleChange}
                        value={props.valuesForm.title}
                        validators={title_validators_name}
                        errorMessages={title_error_message}
                        required
                    />
                </FormControl>
                <FormControl
                    className="items-min-width form-items"
                    variant="outlined">
                    <InputLabel id="category">Select category *</InputLabel>
                    <Select
                        native
                        name="category"
                        onChange={handleChange}
                        label="Select category"
                        inputProps={{
                            id: 'category',
                        }}
                        required>
                        <option aria-label="None" value="" />
                        {Object.keys(serviceCategories).map((key, i) => {
                            let value = serviceCategories[key];
                            return (
                                <option key={i} value={key}>
                                    {value}
                                </option>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        label="Description"
                        type="text"
                        id="description"
                        name="description"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth={true}
                        onChange={handleChange}
                        value={props.valuesForm.description}
                        validators={description_validators_name}
                        errorMessages={description_error_message}
                        required
                    />
                </FormControl>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        label="Minimum price"
                        type="number"
                        id="base_price"
                        name="base_price"
                        variant="outlined"
                        fullWidth={true}
                        onChange={handleChange}
                        value={props.valuesForm.base_price}
                        validators={price_validators_name}
                        errorMessages={price_error_message}
                        required
                    />
                </FormControl>
                <p>*required field</p>
                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button type="button" className="button-accent">
                        Cancelar
                    </button>
                    <button type="submit" className="button-primary">
                        Create Service
                    </button>
                </div>
            </ValidatorForm>
        </div>
    );
};
