import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from '../../../shared/services/budget-api';
import ServicesApi from '../../../shared/services/services-api';
// import { Link } from 'react-router-dom';

import './new-budget-request-form.scss';
import {
    title_error_message,
    description_error_message,
    address_error_message,
} from '../error-messages/error-messages';
import {
    title_validators_name,
    description_validators_name,
    address_validators_name,
} from '../validators-names/validators-names';

export default function NewBudgetRequestForm(props) {
    const values = {
        description: '',
        userEmail: '',
        location: '',
        minorJobId: props.props.match.params.id,
        imageHash:
            '6e313fae4b113e12c469edb558ccc92e331751efd5441c031802b04441efa7a3',
    };

    // const [encodedImage, setEncodedImage] = useState('');
    const [valuesForm, setValuesForm] = useState(values);
    const [minorJobOfBudget, setMinorJobOfBudget] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setValuesForm({
            ...valuesForm,
            [e.target.name]: e.target.value,
        });
    };

    /*useEffect(() => {
        const getMinorJob = () => {
            new ServicesApi()
                .getServiceById(props.props.match.params.id)
                .then((res) => {
                    setMinorJobOfBudget(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        getMinorJob();
    }, []);
    */
    const createBudget = () => {
        new BudgetApi()
            .createBudgetRequest(valuesForm)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudget();
    };

    // const handleSelectedImage = async (e) => {
    //     let image = await encodeBase64(e.target.files[0])
    //     console.log(image)
    //     await setEncodedImage(image)
    // };

    // const encodeBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         let reader = new FileReader();
    //         reader.readAsDataURL(file)
    //         reader.onload = () => {
    //             resolve(reader.result)
    //         }
    //     })
    // }
    ValidatorForm.addValidationRule('isRequired', (value) => {
        if (value === '') {
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

    return (
        <div className="wrapper">
            <div className="mat-card">
                <div className="flex-row-center-center">
                    <h3 style={{ paddingBottom: 24 }}> Request a Budget </h3>
                </div>
                <ValidatorForm
                    onSubmit={handleSubmit}
                    onError={(errors) => console.log(errors)}>
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Description"
                            name="description"
                            id="description"
                            variant="outlined"
                            value={valuesForm.description}
                            onChange={handleChange}
                            validator={['isRequired']}
                            errorMessages={['Required field']}
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
                            value={valuesForm.location}
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                    {/* <FormControl className="items-min-width form-items" variant="outlined">
                        <label>
                        <Input type='file'
                            accept="image/*"
                            style={{display: 'none'}}
                            id="image_url_encoded"
                            name="image_url_encoded"
                            value={encodedImage}
                            onChange={(e) => {handleSelectedImage(e, setEncodedImage)}}
                        />
                        <div className="input-image-container">
                            <span className="material-icons">cloud_upload</span>
                            <p>Choose a file</p>
                        </div>
                        </label>
                    </FormControl> */}
                    <FormControl className="items-min-width form-items">
                        <TextValidator
                            className="items-min-width"
                            label="Email"
                            name="userEmail"
                            id="userEmail"
                            variant="outlined"
                            onChange={handleChange}
                            value={valuesForm.userEmail}
                            required
                        />
                    </FormControl>
                    <div className="container-button-submit">
                        <button type="submit" className="button-primary">
                            Submit request
                        </button>
                    </div>
                </ValidatorForm>
            </div>
        </div>
    );
}
