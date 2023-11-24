import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //return (
  //   <div className="expense-item">
  //     <ExpenseDate date={props.date}/>
  //     <div className="expense-item__description">
  //       <h2>{props.title}</h2>
  //       <h2>{props.LocationOfExpenditure}</h2>
  //       {/* <h2>{props.location}</h2> */}
  //       <div className="expense-item__price">${props.amount}</div>
  //     </div>
  //     <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />

  //   </div>
  // );
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
    </div>
  );
}

export default ExpenseItem;
