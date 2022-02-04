import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    showFormHandler();
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  }

  return (
    <div className='new-expense'>
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm &&
        <>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
          <button onClick={showFormHandler}>Close</button>
        </>
      }
    </div>
  );
};

export default NewExpense;
