import React from 'react';
import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpenses/NewExpense'
const ExpenseItems = [
  { id:1,title: "Expense item1", amount: 243.22, date: new Date(2020, 2, 3) },
  { id:2,title: "Expense item2", amount: 243.23, date: new Date(2022, 3, 4) },
];

function App() {
  const[expenses,setExpenses]=React.useState(ExpenseItems);

  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
     
       <NewExpense onSavexpenseData={addExpenseHandler}></NewExpense>
      <Expense items={expenses} ></Expense>
      
    </div>
    
    
  );
}

export default App;
