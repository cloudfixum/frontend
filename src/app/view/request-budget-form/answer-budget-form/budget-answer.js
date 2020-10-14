import React from 'react';

import NewBudgetAnswerForm from './new-budget-answer/new-budget-answer-form';

<<<<<<< HEAD
export default function BudgetRequest() {
=======
export default function BudgetAnswer(props) {
>>>>>>> ffc43160ead184f277792be45375178864b6f9f3
    return (
        <div className="container-budget-request">
            <NewBudgetAnswerForm props={props} />
        </div>
    );
}
