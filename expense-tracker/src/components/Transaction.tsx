import React, {FC, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

interface Transaction {
    id: number,
    text: string,
    amount: number
}

interface TTransaction {
    transaction: Transaction
}

//{id:number, text:string, amount:number}
const Transaction = ({transaction}:TTransaction) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text}
            <span>{transaction.amount} lei</span>
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
