import React from 'react';
import ReactDom from 'react-dom';

import Row from './Row/Row';
import './Board.css';

const Board = () => {
  return (
    <div className="board-holder">
      <div className="board">
        {Array(6).fill().map((_, i) => <Row />)}
      </div>
    </div>
  )
}

export default Board;