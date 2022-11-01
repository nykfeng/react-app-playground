import "./App.css";
import DiceGame from "./components/Dice-game";

import React from "react";

function App() {

  return (
    <div className="App">
     
      <h1>App Heading</h1>
      {/* <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}

      <DiceGame />
    </div>
  );
}

export default App;

