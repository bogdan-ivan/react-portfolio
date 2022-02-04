import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const ExpenseList = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            {expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
        </Card>
    )
}

export default ExpenseList
