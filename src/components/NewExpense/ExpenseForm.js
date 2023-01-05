import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    // document.getElementById("").addEventListener('click', (event) => {...})
    // above example shows how it's done in vanilla js

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);
    // value of event is always string

    const submitHandler = (event) => {
        event.preventDefault();
        // in fact, form submission requests, triggering page to reload
        // behavior we may not need usually

        const expenseData = {
            // 'title', 'amount', 'date' namings up to us
            id: Math.random(), // can be wrong
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSubmit(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    const clickHandler = () => {
        props.onClicking();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={clickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;