import React from 'react';
import { FormControl } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Alert from '@material-ui/lab/Alert';

export default (props) => {
    const handleChange = (e) => {
        props.setDni({
            ...props.dni,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.singinUser();
    };

    return (
        <div className="container-form-singin">
            <h1>Sing In</h1>
            {props.isValidate === false ? (
                <Alert
                    variant="filled"
                    severity="error"
                    className="message-error-login">
                    Incorrect DNI !
                </Alert>
            ) : null}
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="items-min-width form-items">
                    <TextValidator
                        name="dni"
                        fullWidth={true}
                        id="dni"
                        label="D.N.I."
                        variant="outlined"
                        onChange={handleChange}
                        value={props.dni.dni}
                        required
                    />
                </FormControl>
                <button className="button button-primary">Sing In</button>
            </ValidatorForm>
        </div>
    );
};
