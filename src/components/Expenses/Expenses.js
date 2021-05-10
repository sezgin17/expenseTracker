import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import TotalExpenseAmount from "./TotalExpenseAmount";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
    console.log("In Expenses.js");
    console.log(enteredYear);
  };
  const firstDate = new Date(filteredYear, 1, 1);
  const lastDate = new Date(filteredYear, 12, 31);
  const filteredItems = props.items.filter(
    (item) => item.date >= firstDate && item.date <= lastDate
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart  expenses={filteredItems}/>
      <ExpensesList  items={filteredItems}/>
      <TotalExpenseAmount expenses={filteredItems}/>
    </Card>
  );
}

export default Expenses;
