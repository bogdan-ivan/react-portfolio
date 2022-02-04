import React, { useState } from 'react'
import './NewExpense.css'
import './ExpenseForm.css'

const NewExpense = ({ onSaveExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });

        // Safer way to ensure that you always operate on the latest state snapshot
        // setUserInput((prevstate) => {
        //     return {
        //         ...prevstate,
        //         enteredTitle: e.target.value
        //     }
        // });
    };
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (title === "") {
            return;
        }
        const expenseData = { title, amount, date };
        console.log(expenseData);
        setTitle("");
        setAmount(0);
        setDate("");
        onSaveExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <form action="" onSubmit={formSubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="name">Amount</label>
                        <input name="amount" type="number" value={amount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="date">Date</label>
                        <input name="date" type="date" value={date} onChange={dateChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <button type="submit" >Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
