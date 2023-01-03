import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/* expenseDate is Date class, so root page will be blank. */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
// we export ExpenseItem() as default for this file
