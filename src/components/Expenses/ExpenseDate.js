import "../Expenses/ExpenseDate.css"
export default function ExpenseDate(prop)
{
    const month=new Date(prop.date).toLocaleString('default', { month: 'long' })
    const day=new Date(prop.date).toLocaleString('default', { day: '2-digit' })
    const year=new Date(prop.date).getFullYear()
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
