import React, {useState} from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from "../../../../shared/services/budget-api";
import {title_validators_name} from "../../validators-names/validators-names";
import {title_error_message} from "../../error-messages/error-messages";

export default function NewBudgetAnswerForm() {
    const values = {
        'description': '',
        'price': '',
    }

    const [valuesForm, setValuesForm] = useState(values);

    const handleChange = (e) => {
        e.preventDefault();
        setValuesForm({
            ...valuesForm,
            [e.target.name]: e.target.value,
        });
    };

    const createBudgetAnswer = () => {
        console.log('Values:'+valuesForm)
        new BudgetApi.createBudgetAnswer(valuesForm)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudgetAnswer()
    };

    return(
        <div className="container-budget-answer-form">
            <div className='flex-row-center-center'>
                <h3> Answer a Budget Request </h3>
            </div>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        label="Description"
                        name="description"
                        id="description"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        label="Price"
                        name="price"
                        id="price"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                </FormControl>
            </ValidatorForm>
        </div>
    )
}