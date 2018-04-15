import React, {Component} from 'react';

import Header from '../Header/Header';
import Board from '../Board/Board';
import Arrow from '../Arrow/Arrow';
import Row from '../Shared/Row/Row';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      playerOneTurn: true,
      lastColClicked: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  createBoard() {
    return Array(6).fill().map(arr => Array(7).fill(null));
  }

  updateBoard(prevState, colIndex) {
    const board = prevState.board.slice();
    const row = board.slice().reverse().filter(row => row[colIndex] === null)[0];
    const rowIndex = board.indexOf(row);
    board[rowIndex][colIndex] = prevState.playerOneTurn === true ? 'playerone' : 'playertwo';
    return board;
  }

  handleClick(colIndex) {
    this.setState(prevState => {
      const board = this.updateBoard(prevState, colIndex);
      return {
        board,
        playerOneTurn: !this.state.playerOneTurn,
        lastColClicked: colIndex
      }
    });
    console.log(this.state.board);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Row style={{height: '20px', marginBottom: '40px'}}>
            {Array(7).fill().map((_, i) => <Arrow key={i} colIndex={i} handleClick={this.handleClick} />)}
          </Row>
          <Board {...this.state} />
        </div>
      </div>
    );
  }
}

export default Container;