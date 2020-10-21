import React, { useState, useEffect } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from '../../../../shared/services/budget-api';

export default function NewBudgetAnswerForm(props) {
    const values = {
        budgetId: props.props.match.params.id,
        providerResponse: '',
        price: 0,
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

    const getBudgetById = () => {
        new BudgetApi()
            .getBudgetById(props.props.match.params.id)
            .then((res) => {
                setBudget(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBudgetById();
    }, []);

    const createBudgetAnswer = () => {
        new BudgetApi()
            .createBudgetAnswer(valuesForm)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudgetAnswer();
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
                        <h3> Answer - Budget Request </h3>
                    </div>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className="flex-column-center-center">
                        <FormControl
                            style={{ maxWidth: '100%', marginBottom: 24 }}>
                            <TextValidator
                                label="Response"
                                name="providerResponse"
                                id="providerResponse"
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
            </div>
        </div>
    );
}
