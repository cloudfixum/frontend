import React from 'react';

import NewBudgetAnswerForm from './new-budget-answer/new-budget-answer-form';

export default function BudgetAnswer(props) {
    return (
        <div className="container-budget-request">
            <NewBudgetAnswerForm props={props} />
        </div>
    );
}
