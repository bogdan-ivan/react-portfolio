import { log } from 'console';
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    // const context = useContext(GlobalContext);
    const { transactions, getTransactions } = useContext(GlobalContext);
    console.log(transactions);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {/* {transactions.map((transaction: any) => (<Transaction key={transaction.id}
                    transaction={transaction} />))} */}
                {transactions.map((transaction: any) => (<Transaction key={transaction._id}
                    transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionList
