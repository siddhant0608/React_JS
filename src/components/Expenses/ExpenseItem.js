// import ExpenseDetails from "./ExpenseDetails";
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] =useState(props.title);
  const [amount, setAmount] =useState(props.amount);
  
  const clickHandler =()=>{
    setTitle('Updated!');
    console.log(title);
  }

  const changeExpense = () =>{
    setAmount('100');

  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpense}>Change Expense</button>
      {/* <button>Delete Expense</button> */}
      {/* <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} /> */}

    </Card>
  );
  // return (
  //   <div className="expense-item">
  //     <ExpenseDate date={props.date} />

  //     <ExpenseDetails
  //       amount={props.amount}
  //       location={props.location}
  //       title={props.title}
  //     />
  //   </div>
  // );
}

export default ExpenseItem;
