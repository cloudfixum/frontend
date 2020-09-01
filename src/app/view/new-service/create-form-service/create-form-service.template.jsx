import React, { useState } from 'react';
import { Select, TextField, InputLabel, FormControl } from '@material-ui/core';

import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

import './create-form-service.scss';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.prevenDefault();
        if (Object.keys(errors).length === 0) {
            callback();
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        setErrors(validate({ [event.target.name]: event.target.value }));
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return {
        handleChange,
        handleSubmit,
        errors,
    };
};

const titleFieldValidation = (values) => {
    let errors = {};
    if (values.title === '') {
        errors.title = 'Name required';
    } else if (values.title.length < 5 || values.title.length > 50) {
        errors.title = 'Title must be between 5 and 50 characters long';
    } else {
        errors = {};
    }
    return errors;
};

export default (props) => {
    const serviceCategories = new ServiceCategories().getCategoriesOrdered();
    const { errors, handleChange, handleSubmit } = useForm(
        props.createService,
        titleFieldValidation
    );

    return (
        <div className="container-form-create-service">
            <h1>Create new service</h1>
            <form className="flex-column-center-center" onSubmit={handleSubmit}>
                <FormControl className="items-min-width form-items">
                    <TextField
                        label="Service name"
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        error={errors.title !== undefined}
                        helperText={errors.title}
                        variant="outlined"
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
                <TextField
                    type="text"
                    name="description"
                    onChange={handleChange}
                    id="description"
                    label="Description"
                    fullWidth={true}
                    multiline
                    rows={10}
                    className="form-items"
                    variant="outlined"
                    required
                />
                <TextField
                    type="number"
                    name="base_price"
                    onChange={handleChange}
                    className="form-items"
                    fullWidth={true}
                    id="base_price"
                    label="Minimum price"
                    variant="outlined"
                    required
                />
                <p>*required field</p>
                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button type="button" className="button-accent">
                        Cancelar
                    </button>
                    <button type="submit" className="button-primary">
                        Create Service
                    </button>
                </div>
            </form>
        </div>
    );
};
