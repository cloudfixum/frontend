import React, { useState, useEffect } from 'react';
import { FormControl } from '@material-ui/core';
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
                setBudget(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBudgetAnswer();
    };

    if (budget.budgetStatus === 'RESPONSED_BUDGET') {
        return (
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <p>Budget answered, awaiting confirmation.</p>
                </div>
            </div>
        );
    } else if (budget.budgetStatus === 'BUDGET_ACCEPTED') {
        return (
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <p>
                        Budget accepted you can contact the email{' '}
                        {budget.userEmail}.
                    </p>
                </div>
            </div>
        );
    } else if (budget.budgetStatus === 'BUDGET_REJECTED') {
        return (
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <p>Budget was rejected.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <p>
                        <b>User:</b> {budget.userEmail}
                    </p>
                    <p>
                        <b>Description:</b> {budget.description}
                    </p>
                </div>
            </div>
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <div style={{ marginBottom: 24 }}>
                        <h3> Answer - Budget Request </h3>
                    </div>
                    <ValidatorForm
                        style={{ width: '100%' }}
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className="wrapper col1">
                        <FormControl>
                            <TextValidator
                                label="Response"
                                name="providerResponse"
                                id="providerResponse"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                multiline
                                rows={2}
                                required
                            />
                        </FormControl>
                        <FormControl>
                            <TextValidator
                                label="Price"
                                name="price"
                                id="price"
                                fullWidth={true}
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
