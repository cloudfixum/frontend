import React, {useEffect, useState} from 'react';
import BudgetApi from '../../../../shared/services/budget-api';
import Link from "@material-ui/core/Link";

export default function userNoLogBudgetList(props) {

    const [budgetList, setBudgetList] = useState({});

    const getBudgetList = () => {
        new BudgetApi
            .getBudgetByEmail(props.props.match.params.id)
            .then((res) => {
                console.log(res);
                setBudgetList(res)
            })
            .catch((e) => {
                console.log(e);
            });
    };


    if(budget.budgetStatus === "BUDGET_RESPONSED"){
        return (
            <div>
                <div className="confirm-budget">
                    <Link to=''>
                        <button>Confirmar</button>
                    </Link>
                </div>
                <div className="reject-budget">
                    <Link to=''>
                        <button>Rechazar</button>
                    </Link>
                </div>
            </div>
        )
    }

    return(
        <div>
            {budgetList.map((budget, i) => (
                <div className="wrapper">
                    <div className="mat-card">
                        <p>
                            <b>User:</b> {budget.userEmail}
                        </p>
                        <p>
                            <b>Description:</b> {budget.description}
                        </p>
                        <p>
                            <b>Status:</b>{budget.budgetStatus}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}