import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title); // array destructuring
  const changeTitle = () => setTitle("Updated");
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expense.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
        <button onClick={changeTitle}>Click</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
