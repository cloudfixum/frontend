import React, {useState} from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

import './new-budget-request-form.scss'

export default function NewBudgetRequestForm() {
    const values = {
        title: '',
        description: '',
        location: '',
        image: '',
        email: '',
    };
    const [valuesForm, setValuesForm] = useState(values);

    const handleChange = () => {

    };
    const handleSubmit = () => {

    };

    return(
        <div className='container-budget-request-form'>
            <div className='flex-row-center-center'>
                <h3> Request a Budget </h3>
            </div>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl>
                    <TextValidator
                        label="Service Title"
                        name="title"
                        id="title"
                        variant="outlined"
                        onChange={handleChange}
                        validators={}
                        required
                    />
                </FormControl>
                <FormControl>
                    <TextValidator
                        label="Description"
                        name="description"
                        id="description"
                        variant="outlined"
                        onChange={handleChange}
                        validators={}
                        required
                        multiline
                        rows={2}
                    />
                </FormControl>
                <FormControl>
                    <TextValidator
                        label="Location"
                        name="location"
                        id="location"
                        variant="outlined"
                        onChange={handleChange}
                        validators={}
                        required
                    />
                </FormControl>
                <FormControl>
                    <InputLabel></InputLabel>
                    <Input type='file'/>
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