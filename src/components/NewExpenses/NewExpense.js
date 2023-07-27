import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const [addExpense,setAddExpense]=React.useState(false);
    const SaveExpenseFromHandler=(enteredExpenseFormData)=>{
        const ExpenseData={
            id:Math.random().toString(),
            ...enteredExpenseFormData,
            
        };
        console.warn(ExpenseData)
        
       props.onSavexpenseData(ExpenseData);
    }
    
    const NewExpenseHandler=()=>{
        
        setAddExpense(false)
    }
    const AddExpenseHandler=()=>{
        setAddExpense(true);
    }
    
    return(
        <div className='new-expense'>
            {!addExpense  &&<button type='button' onClick={AddExpenseHandler}>Add Expense</button>}
          {addExpense && <ExpenseForm  onSaveExpenseForm={SaveExpenseFromHandler} newexpencecancel={NewExpenseHandler}></ExpenseForm>}
          </div>
            
    );

};
export default NewExpense;