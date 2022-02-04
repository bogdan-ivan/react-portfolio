import React, { useState } from 'react';
import ExpensesFilter from './components/Expenses/ExpenseFilter';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
  const expensesData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesData);
  const [filter, setFilter] = useState("2022");

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const saveExpense = (newExpense) => {
    newExpense = { id: (Math.random() * 1000).toFixed(0).toString(), ...newExpense };
    setExpenses([...expenses, newExpense]);
  };

  const applyFilter = (value) => {
    setFilter(value);
    const filteredExpenses = expenses.filter((expense)=>{
        if(expense.date.toISOString().includes(value)){
          return true;
        }
    });
    setExpenses(filteredExpenses);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveExpense={saveExpense} />
      <ExpensesFilter onFilterChange={applyFilter}/>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
