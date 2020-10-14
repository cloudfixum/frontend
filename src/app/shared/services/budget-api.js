import axios from 'axios';
const BASE = 'https://cloudfixum-api-dev.herokuapp.com/api/';

class BudgetApi {
    async createBudgetRequest(budgetRequest) {
        const budgetRequestJson = JSON.stringify(budgetRequest);
        const query = await axios.post(`${BASE}budget`, budgetRequestJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    }

    async createBudgetAnswer(budgetAnswer) {
        const budgetAnswerJson = JSON.stringify(budgetAnswer);
        const query = await axios.post(
            `${BASE}budget/answer`,
            budgetAnswerJson,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = query.data;
        return data;
    }

    async getBudgetByUserId() {
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        const query = await axios.get(`${BASE}user/budgets`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt['jwt']}`,
            },
        });
        const data = query.data;
        return data;
    }
}
export default BudgetApi;
