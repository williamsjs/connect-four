import React from 'react';
import ReactDom from 'react-dom';

import Space from './Space/Space';
import Arrow from '../Arrow/Arrow';
import Row from './Row/Row';
import './Board.css';

const Board = () => {

  const rows = (_, i) => (
    <Row key={i+1}>{rowOutput(spaces, 6)}</Row>
  );

  const spaces = (_, i) => (
    <Space key={i+1} />
  );

  const arrowRow = (_, i) => (
    <Arrow key={i+1} />
  )

  const rowOutput = (row, num) => {
    return Array(num).fill().map(row);
  }

  return (
    <div className="board-holder">
      <Row>{rowOutput(arrowRow, 7)}</Row>
      <div className="board">
        {rowOutput(rows, 7)}
      </div>
    </div>
  )
}

export default Board;