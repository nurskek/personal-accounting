import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseListView.css';

const ExpenseListView = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseListView;
