import React, {useState} from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
        image: encodedImage,
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
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    //this handles the "Select File Button" when uploading an image
    const handleSelectedImage = async (i) => {
        // console.log(e.target.files);
        const file = i.target.files[0];
        const base64 = await encodeBase64(file);
        // console.log(base64);
        setEncodedImage(base64);
    };

    //this encodes the image to base64 with the "readAsDataURL" function
    const encodeBase64 = (file) => {
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error)=>{
                reject(error);
            };
        });
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
        <div className='container-budget-request-form'>
            <div className='flex-row-center-center'>
                <h3> Request a Budget </h3>
            </div>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="items-min-width form-items">
                    <TextValidator
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
                    <InputLabel id="image" >Upload an image of the problem</InputLabel>
                    <Input type='file'
                           accept="image/*"
                           id="image"
                           name="image"
                           onChange={(i) => {
                               handleSelectedImage(i);
                           }}
                    />
                </FormControl>
                <FormControl className="items-min-width form-items">
                    <TextValidator
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
                <button className="button button-primary">Submit request</button>
            </ValidatorForm>
        </div>
    );
}

