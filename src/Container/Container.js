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
      gameOver: false,
      reset: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.checkScore = this.checkScore.bind(this);
    this.arrows = this.arrows.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.resetState = this.resetState.bind(this);
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

  checkScore(board, playerOneTurn) {
    const player = playerOneTurn  ? 'playerone' : 'playertwo';

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=0; r < board.length; r++) {
        if (board[r][c] === player && board[r][c+1] === player && board[r][c+2] === player && board[r][c+3] === player) {
          return `${player} wins across!!!`;
        }
      }
    }

    for (let c=0; c < board[0].length; c++) {
      for (let r=0; r < (board.length - 3); r++) {
        if (board[r][c] === player && board[r+1][c] === player && board[r+2][c] === player && board[r+3][c] === player) {
          return `${player} wins vertically!!!`;
        }
      }
    }  

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=0; r < (board.length - 3); r++) { 
        if (board[r][c] === player && board[r+1][c+1] === player && board[r+2][c+2] === player && board[r+3][c+3] === player) {
          return `${player} wins diagonally!!!`;
        }
      }
    }

    for (let c=0; c < (board[0].length - 3); c++) {
      for (let r=3; r < board.length; r++) {
        if (board[r][c] === player && board[r-1][c+1] === player && board[r-2][c+2] === player && board[r-3][c+3] === player) {
          return `${player} wins diagonally!!!`;
        }
      }
    }  

    return false;
  }

  handleClick(colIndex) {
    this.setState(prevState => {
      const board = this.updateBoard(prevState, colIndex);

      const gameOver = this.checkScore(board, prevState.playerOneTurn);

      return {
        board,
        playerOneTurn: !this.state.playerOneTurn,
        lastColClicked: colIndex,
        gameOver
      }
    });
  }

  arrows() {
    return Array(7).fill().map((_, i) => {
      const colFull = !this.state.board.map((row) => row[i]).some(item => item === null);

      return <Arrow 
              key={i} 
              colIndex={i} 
              handleClick={this.handleClick} 
              gameOver={this.state.gameOver}
              colFull={colFull}
              reset={this.state.reset}
             />
    })
  }

  resetState() {
    this.setState({
      board: this.createBoard(),
      playerOneTurn: true,
      lastColClicked: null,
      gameOver: false,
      reset: false
    });
  }

  handleReset() {
    this.setState({reset: true});
    setTimeout(this.resetState, 1400);
  }

  render() {
    return (
      <div>
        <Header playerOneTurn={this.state.playerOneTurn} gameOver={this.state.gameOver} handleReset={this.handleReset}/>
        <div className="container">
          <Row style={{height: '20px', marginBottom: '40px'}}>
            {this.arrows()}
          </Row>
          <Board {...this.state} handleReset={this.handleReset} />
        </div>
      </div>
    );
  }
}

export default Container;