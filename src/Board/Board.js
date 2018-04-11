import React from 'react';
import ReactDom from 'react-dom';

import Row from './Row/Row';
import './Board.css';

const Board = () => {
  return (
    <div className="board">
      {Array(8).fill().map((_, i) => <Row />)}
    </div>
  )
}

export default Board;