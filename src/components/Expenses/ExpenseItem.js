
import ExpenseDate from "../Expenses/ExpenseDate"
import Card from "../Card";
import "../Expenses/ExpenseItem.css"

export default function ExpenseItem(Props){
 
return (
  <li>
    <Card className="expense-item" >
    <ExpenseDate date={Props.date}></ExpenseDate>
    <div className="expense-item__description">
      <h2>{Props.title}</h2>
      <div className="expense-item__price">${Props.amount}</div>
    </div>

  </Card>
  </li>
)
}