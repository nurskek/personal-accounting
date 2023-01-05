import React, { useState } from "react";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseListView from "./ExpenseListView";
import ExpensesChart from "./ExpensesChart";

function ExpenseList(props) {
  const [year, setYear] = useState("2023");
  // let result = props.data.filter(items => items.date.getFullYear() === parseInt(year));
  // const expenses = props.data; // old expenses list
  const yearChangeHandler = (data) => {
    setYear(data);
    // result = props.data.filter(items => items.date.getFullYear() == year);
  };

  const filteredResult = props.data.filter((expense) => {
    return expense.date.getFullYear() === parseInt(year);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChanged={yearChangeHandler} />
        <ExpensesChart expenses={filteredResult} />
        <ExpenseListView items={filteredResult}/>
        {/* above method's alternatives:
        1) terniray operator 
        2) using && 
        3) saving jsx structure in variable outer return statement
        */}
      </Card>
    </div>
  );
}

export default ExpenseList;
