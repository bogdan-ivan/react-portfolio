import { log } from 'console';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    // const context = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction:any) => (<Transaction key={transaction.id} 
                transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionList
