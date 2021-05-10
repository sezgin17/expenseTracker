import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function cancelButtonHandler(){
      setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onDontEdit={cancelButtonHandler} />}
    </div>
  );
};

export default NewExpense;
