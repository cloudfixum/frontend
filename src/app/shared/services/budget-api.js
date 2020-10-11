import axios from 'axios';
const BASE = 'https://cloudfixum-api-dev.herokuapp.com/api/';

class BudgetApi {

    async createBudgetRequest(budgetRequest) {
        const budgetRequestJson = JSON.stringify(budgetRequest);
        const query = await axios.post(`${BASE}budget/request`, budgetRequestJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data;
        return data;
    };

    async createBudgetAnswer(budgetAnswer) {
        const budgetAnswerJson = JSON.stringify(budgetAnswer);
        const query = await axios.post(`${BASE}budget/answer`, budgetAnswerJson, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = query.data
        return data;
    };

    async getBudgetByUserId(id) {
        console.log(id);
        const query = await axios.get(`${BASE}budget/${id}/request`);
        const data = query.data;
        return data;
    };
}
export default BudgetApi;