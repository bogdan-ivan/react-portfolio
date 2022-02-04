import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction: any) => transaction.amount);
    const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your balance:</h4>
            <h1 id='balance'>${numberWithCommas(total)}</h1>
        </div>
    )
}

export default Balance
