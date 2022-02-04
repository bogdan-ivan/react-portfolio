import React, { FC, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

interface Transaction {
    _id: number,
    text: string,
    amount: number
}

interface TTransaction {
    transaction: Transaction
}

//{id:number, text:string, amount:number}
const Transaction = ({ transaction }: TTransaction) => {
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li key={transaction._id} className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text}
            <span>{numberWithCommas(transaction.amount)} lei</span>
            {/* <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button> */}
            <button className='delete-btn' onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}

export default Transaction
