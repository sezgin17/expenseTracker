import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const defaultExpenses = []

  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
