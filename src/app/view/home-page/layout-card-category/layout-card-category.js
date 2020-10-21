import React, { useState } from 'react';

import CardCategory from '../card-category/card-category';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';
import { toUpperFirstChar } from '../../../shared/utils/to-upper-first-char';
import { FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BudgetApi from '../../../shared/services/budget-api';

export default function LayoutCardCategory(props) {
    let categories = new ServiceCategories().getCategories();

    let [email, setEmail] = useState('');

    const setCategory = (category, e) => {
        e.preventDefault();
        props.callback(category);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', JSON.stringify(email));
        window.location = '/client/budgets';
    };

    return (
        <div>
            <ValidatorForm
                className="wrapper col1"
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <FormControl className="form-control-layout">
                    <TextValidator
                        label="Enter email to see your budgets"
                        type="email"
                        id="email"
                        name="email"
                        fullWidth={true}
                        variant="outlined"
                        onChange={handleChange}
                        value={email}
                    />
                </FormControl>
                <div className="flex-row-flexend-center">
                    <button className="button-primary">Search</button>
                </div>
            </ValidatorForm>
            <div className="responsive-wrapper col4-res">
                {categories.map((category, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            setCategory(category, e);
                        }}>
                        <CardCategory category={toUpperFirstChar(category)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
