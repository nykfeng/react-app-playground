import "./App.css";
import DiceGame from "./components/Dice-game";
import CoinContainer from "./components/coin-flip/CoinContainer";

import React from "react";
import Coin from "./components/coin-flip/Coin";

function App() {
  return (
    <div className="App">
      <h1>App Heading</h1>
      <CoinContainer />
    </div>
  );
}

export default App;
