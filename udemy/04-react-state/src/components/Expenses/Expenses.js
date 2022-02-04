import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // let expensesContent = <h3>No expenses for the selected year</h3>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = <ExpenseList expenses={filteredExpenses} />;
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 && <h3>No expenses for the selected year</h3>}
        {filteredExpenses.length > 0 && <ExpenseList expenses={filteredExpenses} />}

        {/* {expensesContent} */}
      </Card>
    </div>
  );
};

export default Expenses;
