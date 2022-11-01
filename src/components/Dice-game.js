import React, { Component } from "react";
import Dice from "./dice/Dice";
import "./Dice-game.css";

class DiceGame extends Component {
  static defaultProps = {
    side: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", isRolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // get 2 random numbers
    const newDie1 =
      this.props.side[Math.floor(Math.random() * this.props.side.length)];
    const newDie2 =
      this.props.side[Math.floor(Math.random() * this.props.side.length)];

    // set state to roll
    this.setState({ die1: newDie1, die2: newDie2, isRolling: true });

    // wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="rollDice">
        <div className="dice-container">
          <Dice face={this.state.die1} rolling={this.state.isRolling} />
          <Dice face={this.state.die2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll 'em!"}
        </button>
      </div>
    );
  }
}

export default DiceGame;
