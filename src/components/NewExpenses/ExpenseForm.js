import React,{useState} from 'react';
import styles from './ExpenseForm.module.css'; 
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const TitleChangeHandler=(event)=>{
      setEnteredTitle(event.target.value)
       
    }
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)

    }
    const DateChangeHandler= (event)=>{
        setEnteredDate(event.target.value)

    }
    const SubitFormHandler=(event)=>{
      event.preventDefault();
      const ExpenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate) 
      };
      
      props.onSaveExpenseForm(ExpenseData)

    }
    return (
        <form onSubmit={SubitFormHandler}>
          <div className={styles['new-expense__controls']}>
            <div className={styles['new-expense__control']}>
              <label>Title</label>
              <input type='text' value={enteredTitle} onChange={TitleChangeHandler}/>
            </div>
            <div className={styles['new-expense__control']}>
              <label>Amount</label>
              <input type='number'   value={enteredAmount} onChange={AmountChangeHandler}/>
            </div>
            <div className={styles['new-expense__control']}>
              <label>Date</label>
              <input type='date'  value={enteredDate} onChange={DateChangeHandler}/>
            </div>
          </div>
          <div className={styles['new-expense__actions']}>
          {/* <button type='button' onClick={props.newexpencecancel}> Cancel</button> */}
            <button type='submit'>Add Expense</button>
          </div>
        </form>
      );
    };

export default ExpenseForm;