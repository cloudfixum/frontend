import React from 'react';
import { FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
    datauser_error_message,
    address_error_message,
    dni_error_message,
    phone_error_message,
    password_error_message,
    confirm_password_error_message,
    date_error_message,
} from '../error-message/error-message';
import {
    datauser_validators_name,
    address_validators_name,
    dni_validators_name,
    phone_validators_name,
    password_validators_name,
    confirm_password_validators_name,
    date_validators_name,
} from '../validators-name/validators-name';

export default function CreateBudgetRequest() {

    return(
        <div className="container-form-budget-request">
            <h1>Budget Request</h1>
            <FormControl className="container-form-double">
                <TextValidator

            </FormControl>
        </div>
    )
}