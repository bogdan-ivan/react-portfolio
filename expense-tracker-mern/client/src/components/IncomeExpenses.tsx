import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction: any) => transaction.amount);
    const income = amounts.filter((amount: number) => amount > 0)
        .reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter((amount: number) => amount < 0)
        .reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
