import "./TotalExpenseAmount.css";
import Card from '../UI/Card'
const TotalExpenseAmount = (props) => {
  let expenseAmounts = props.expenses.map((expense) => expense.amount);
  console.log(expenseAmounts);
  let totalAmount = 0;
  let i;
  for (i = 0; i < expenseAmounts.length; i++) {
    totalAmount += expenseAmounts[i];
  }
  return (
    <Card className="total-expense">
      <div className="total-expense__description">
        <h2>Total Amount:</h2>
      </div>
      <div className="total-expense__price">{totalAmount}$</div>
    </Card>

  );
};

export default TotalExpenseAmount;
