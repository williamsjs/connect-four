import React from 'react';

import Space from './Space/Space';
import Row from '../Shared/Row/Row';
import './Board.css';

const Board  = ({board, gameOver}) => {

  const rows = (_, i) => {
    return (
      <Row key={i}>
        {rowOutput(spaces(i), 7)}
      </Row>
    );
  }

  const spaces = (rowIndex) => {
    return (_, i) => {
      return <Space key={i} player={board[rowIndex][i]} gameOver={gameOver} />;
    };
  }

  const rowOutput = (row, num) => {
    return Array(num).fill().map(row)
  }

  return (
    <div className="board-holder">
      <div className="board">
        {rowOutput(rows, 6)}
      </div>
    </div>
  );
}

export default Board;