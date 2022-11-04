import React, { Component } from "react";
import LightBox from "./LightBox";
import "./LightsBoard.css";

class LightsBoard extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightsStartsOn: 0.3,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        row.push(
          Math.random() < this.props.chanceLightsStartsOn ? true : false
        );
      }
      board.push(row);
    }
    return board;
  }

  flipCellsAround(coord) {
    console.log("Flipping " + coord);
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);

    // win when every cell is turned off
    let hasWon = board.every((row) => row.every((cell) => !cell));
    this.setState({ board, hasWon });
  }

  render() {
    if (this.state.hasWon) {
      return <h1>You Won!!</h1>;
    }
    let tblBoard = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`;
        row.push(
          <LightBox
            key={coord}
            isLit={this.state.board[i][j]}
            flipCellsAroundme={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">OUT!</div>
        </div>
        <table className="lights-board">
          <tbody>{tblBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default LightsBoard;
