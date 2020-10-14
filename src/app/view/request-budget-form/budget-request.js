import React from "react";
import './budget-request.scss';

import NewBudgetRequestForm from './new-budget-request/new-budget-request-form'

export default function BudgetRequest() {
    return(
      <div className="container-budget-request">
          <NewBudgetRequestForm />
      </div>
    );
}
