import React, { useState } from 'react'

const ExpenseItem = ({expense:{ name, amount }}) => {
    // const [name, setName] = useState("");
    // const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();
    return (
        <div>
            <p>{name}</p>
            <p>{amount}</p>
            <p>{date}</p>
        </div>
    )
}

export default ExpenseItem
