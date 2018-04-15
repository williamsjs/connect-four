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
      lastColClicked: null,
      winner: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.checkScore = this.checkScore.bind(this);
  }

  createBoard() {
    return Array(6).fill().map(arr => Array(7).fill(null));
  }

  updateBoard(prevState, colIndex) {
    const board = prevState.board.slice();
    const row = board.slice().reverse().filter(row => row[colIndex] === null)[0];
    const rowIndex = board.indexOf(row);
    board[rowIndex][colIndex] = prevState.playerOneTurn === true ? 'playerone' : 'playertwo';
    this.checkScore(board, prevState.playerOneTurn);
    return board;
  }

  checkScore(board, playerOneTurn) {
    const player = playerOneTurn  ? 'playerone' : 'playertwo';

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=0; r < board.length; r++) {
        if (board[r][c] === player && board[r][c+1] === player && board[r][c+2] === player && board[r][c+3] === player) {
          console.log('game over man:', player, 'wins');
        }
      }
    }

    for (let c=0; c < board[0].length; c++) {
      for (let r=0; r < (board.length - 3); r++) {
        if (board[r][c] === player && board[r+1][c] === player && board[r+2][c] === player && board[r+3][c] === player) {
          console.log('game over man:', player, 'wins');
        }
      }
    }  

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=0; r < (board.length - 3); r++) { 
        if (board[r][c] === player && board[r+1][c+1] === player && board[r+2][c+2] === player && board[r+3][c+3] === player) {
          console.log('game over man:', player, 'wins');
        }
      }
    }

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=3; r < board.length; r++) {
        if (board[r][c] === player && board[r-1][c+1] === player && board[r-2][c+2] === player && board[r-3][c+3] === player) {
          console.log('game over man:', player, 'wins');
        }
      }
    }  
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
  }

  render() {
    return (
      <div>
        <Header playerOneTurn={this.state.playerOneTurn} />
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