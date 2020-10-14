import React, {useState} from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from '../../../shared/services/budget-api';
// import { Link } from 'react-router-dom';

import './new-budget-request-form.scss';
import {title_error_message, description_error_message, address_error_message} from '../error-messages/error-messages';
import {title_validators_name, description_validators_name, address_validators_name} from '../validators-names/validators-names';

export default function NewBudgetRequestForm() {
    const [encodedImage, setEncodedImage] = useState("");

    const values = {
        title: '',
        description: '',
        location: '',
        image: '',
        email: '',
    };

    const [valuesForm, setValuesForm] = useState(values);

    const handleChange = (e) => {
        e.preventDefault();
        setValuesForm({
            ...valuesForm,
            [e.target.name]: e.target.value,
        });
    };

    const createBudget = () => {
        console.log('Values:'+valuesForm)
        new BudgetApi.createBudgetRequest(valuesForm)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudget()
    };

    //this handles the "Select File Button" when uploading an image
    const handleSelectedImage = (e) => {
        // console.log(e.target.files);
        const file = e.target.files[0];
        const base64 = encodeBase64(file);
        console.log(base64);
        setEncodedImage(base64);
    };

    //this encodes the image to base64 with the "readAsDataURL" function
    const encodeBase64 = (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        return fileReader.result;
    };

    //const encodedImage = new Buffer().toString('base64');

    ValidatorForm.addValidationRule('lengthValue', (value) => {
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

    ValidatorForm.addValidationRule('maxLengthDescription', (value) => {
        if (value.length > 256) {
            return false;
        }
        return true;
    });

    ValidatorForm.addValidationRule('isRequired', (value) => {
        if (value === '') {
            return false;
        }
        return true;
    });

    return(
        <div className="wrapper">
            <div className='mat-card'>
                <div className='flex-row-center-center'>
                    <h3 style={{paddingBottom: 24}}> Request a Budget </h3>
                </div>
                <ValidatorForm
                    onSubmit={handleSubmit}
                    onError={(errors) => console.log(errors)}>
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Service Title"
                            name="title"
                            id="title"
                            variant="outlined"
                            onChange={handleChange}
                            validators={title_validators_name}
                            errorMessages={title_error_message}
                            required
                        />
                    </FormControl>
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Description"
                            name="description"
                            id="description"
                            variant="outlined"
                            onChange={handleChange}
                            validators={description_validators_name}
                            errorMessages={description_error_message}
                            required
                            multiline
                            rows={2}
                        />
                    </FormControl>
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Location"
                            name="location"
                            id="location"
                            variant="outlined"
                            onChange={handleChange}
                            validators={address_validators_name}
                            errorMessages={address_error_message}
                            required
                        />
                    </FormControl>
                    <FormControl className="items-min-width form-items" variant="outlined">
                        <label>
                        <Input type='file'
                            accept="image/*"
                            style={{display: 'none'}}
                            id="image"
                            name="image"
                            onChange={(i) => {
                                handleSelectedImage(i);
                            }}
                        />
                        <div className="input-image-container">
                            <span className="material-icons">cloud_upload</span>
                            <p>Choose a file</p>
                        </div>
                        </label>
                    </FormControl>
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Email"
                            name="email"
                            id="email"
                            variant="outlined"
                            onChange={handleChange}
                            //value={props.valuesForm.email}
                            validators={['isEmail']}
                            errorMessages={'wrong format, need example@example.com'}
                            required
                        />
                    </FormControl>
                    <div className="container-button-submit">
                        <button className="button-primary">Submit request</button>
                    </div>
                </ValidatorForm>
            </div>
        </div>
    );
}

