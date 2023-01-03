import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
import Card from "../UI/Card";

function ExpenseList(props) {
  const expenses = props.data; // old expenses list
  return (
    <Card className="expenses">
      <ExpenseItem
        name={expenses[0].title}
        price={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[1].title}
        price={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[2].title}
        price={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[3].title}
        price={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default ExpenseList;
