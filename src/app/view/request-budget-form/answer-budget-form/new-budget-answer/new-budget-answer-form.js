<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> ffc43160ead184f277792be45375178864b6f9f3
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from '../../../../shared/services/budget-api';
import { title_validators_name } from '../../validators-names/validators-names';
import { title_error_message } from '../../error-messages/error-messages';

export default function NewBudgetAnswerForm(props) {
    const values = {
        description: '',
        price: '',
    };

    const [valuesForm, setValuesForm] = useState(values);
    const [budget, setBudget] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setValuesForm({
            ...valuesForm,
            [e.target.name]: e.target.value,
        });
    };

<<<<<<< HEAD
    const createBudgetAnswer = () => {
        console.log('Values:' + valuesForm);
        new BudgetApi.createBudgetAnswer(valuesForm)
            .then((res) => {
                console.log(res);
=======
    const getBudgetById = () => {
        new BudgetApi()
            .getBudgetById(props.props.match.params.id)
            .then((res) => {
                setBudget(res);
>>>>>>> ffc43160ead184f277792be45375178864b6f9f3
            })
            .catch((e) => {
                console.log(e);
            });
    };
<<<<<<< HEAD

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudgetAnswer();
    };

    return (
        <div className="container-budget-answer-form">
            <div className="flex-row-center-center">
                <h3> Answer a Budget Request </h3>
=======

    useEffect(() => {
        getBudgetById();
    }, []);

    const updateBudgetRequest = () => {
        budget.budget_price = valuesForm.price;
        budget.provider_response = valuesForm.description;
        budget.budgetStatus = 'RESPONSEDBUDGET';
        new BudgetApi()
            .updateBudgetRequest(budget)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBudgetRequest();
    };

    return (
        <div>
            <div className="wrapper">
                <div className="mat-card">
                    <p>
                        <b>User:</b> {budget.userEmail}
                    </p>
                    <p>
                        <b>Description:</b> {budget.description}
                    </p>
                </div>
            </div>
            <div className="wrapper">
                <div className="mat-card">
                    <div
                        className="flex-row-center-center"
                        style={{ marginBottom: 24 }}>
                        <h3> Answer a Budget Request </h3>
                    </div>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className="flex-column-center-center">
                        <FormControl
                            style={{ maxWidth: '100%', marginBottom: 24 }}>
                            <TextValidator
                                label="Description"
                                name="description"
                                id="description"
                                variant="outlined"
                                onChange={handleChange}
                                multiline
                                rows={2}
                                required
                            />
                        </FormControl>
                        <FormControl
                            style={{ maxWidth: '100%', marginBottom: 24 }}>
                            <TextValidator
                                label="Price"
                                name="price"
                                id="price"
                                variant="outlined"
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <div className="flex-row-flexend-center">
                            <button type="submit" className="button-primary">
                                Send
                            </button>
                        </div>
                    </ValidatorForm>
                </div>
>>>>>>> ffc43160ead184f277792be45375178864b6f9f3
            </div>
        </div>
    );
}
