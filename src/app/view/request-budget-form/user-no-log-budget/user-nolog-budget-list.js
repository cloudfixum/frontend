import React, { useEffect, useState } from 'react';
// import BudgetApi from '../../../../shared/services/budget-api';
import Link from '@material-ui/core/Link';
import BudgetApi from '../../../shared/services/budget-api';
import { budgetStatus } from '../../../shared/utils/constant/budget-status';

export default function UserNoLogBudgetList(props) {
    const [budgetList, setBudgetList] = useState([]);

    const getBudgetByEmail = () => {
        let email = JSON.parse(localStorage.getItem('email'));
        new BudgetApi()
            .getBudgetByEmail(email)
            .then((res) => {
                setBudgetList(res);
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBudgetByEmail();
    }, []);

    const acceptBudget = (e, accepted, id) => {
        e.preventDefault();
        new BudgetApi()
            .wasConfirmedBudget(accepted, id)
            .then((res) => {
                console.log(res);
                setBudgetList([...budgetList, res]);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    if (budgetList.length === 0) {
        return (
            <div className="wrapper">
                <div className="mat-card">
                    <p>
                        No budget requested
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container-budget-request">
            {budgetList.map((budget, i) => (
                <div key={i} className="wrapper">
                    <div className="mat-card">
                        <p>
                            <b>Client: </b> {budget.userEmail}
                        </p>
                        <p>
                            <b>Description: </b> {budget.description}
                        </p>
                        <p>
                            <b>User provider: </b>{' '}
                            {budget.minorJob.serviceProvider.name}{' '}
                            {budget.minorJob.serviceProvider.last_name}
                        </p>
                        <p>
                            <b>Provider response: </b>{' '}
                            {budget.providerResponse
                                ? budget.providerResponse
                                : '-'}
                        </p>
                        <p>
                            <b>Status: </b>
                            {budgetStatus[budget.budgetStatus]}
                        </p>
                        {budget.budgetStatus === 'BUDGET_ACCEPTED' ||
                        budget.budgetStatus === 'BUDGET_REJECTED' ||
                        budget.budgetStatus === 'BUDGET_ON_HOLD' ? null : (
                            <div className="flex-row-flexend-center">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        acceptBudget(e, false, budget.id);
                                    }}
                                    className="button-accent">
                                    Reject
                                </button>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        acceptBudget(e, true, budget.id);
                                    }}
                                    style={{ marginLeft: 24 }}
                                    className="button-primary">
                                    Accept
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
