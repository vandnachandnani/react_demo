import React from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import Card from "../Card";
import './Expense.css';
function Expense(props)
{
  const[filteredYear,setFilteredYear]=React.useState('2020');

  const FitleredData=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
      });
  const ExpenseFilterHandler=(changevalue)=>{
    setFilteredYear(changevalue);
  }
  
    return (
  <div>
        <Card className="expenses">
        <ExpensesFilter selectedValue={filteredYear} onchangeExpenseFilter={ExpenseFilterHandler} ></ExpensesFilter>
        <ExpensesChart expenses={FitleredData}></ExpensesChart>
       <ExpenseList items={FitleredData}></ExpenseList>
     
      </Card>
      </div>
    )
}
export default Expense;