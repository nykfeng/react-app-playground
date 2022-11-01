import React, { Component } from "react";
import { choice } from "./helper";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      curCoin: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((oldState) => {
      let newState = {
        ...oldState,
        curCoin: newCoin,
        nFlips: oldState.nFlips + 1,
      };
      if (newCoin.side === "heads") newState.nHeads += 1;
      else if (newCoin.side === "tails") newState.nTails += 1;
      return newState;
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="Coin-Container">
        <h1>Let's flip a coin!</h1>
        <button onClick={this.handleClick}>Flip</button>
        {this.state.curCoin && <Coin info={this.state.curCoin} />}
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
