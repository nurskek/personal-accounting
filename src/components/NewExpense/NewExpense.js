import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [formoff, setformoff] = useState(true);
    const submitHandler = (event) => {
        props.onAddExpense(event);
        setformoff(!formoff);
    }

    const formoffHandler = () => {
        setformoff(!formoff);
    }

    const stateHandler = () => {
        setformoff(!formoff);
    }

    return <div className="new-expense">
        {formoff === true && <button onClick={stateHandler}>Add Expense</button>}
        {formoff === false && <ExpenseForm onClicking={formoffHandler} onSubmit={submitHandler}/>}
    </div>
}

export default NewExpense;