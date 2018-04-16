import React from 'react';

import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down'
import './Arrow.css';

const Arrow = ({colIndex, handleClick, gameOver, colFull}) => {

  function sendKey() {
    return handleClick(colIndex);
  }

  function columnFull() {
    return colFull ? {visibility: 'hidden'} : {};
  }

  if (!gameOver) {
    return <FaArrowCircleDown className="arrow" style={columnFull()} onClick={sendKey}/>;
  } else {
    return null;
  }
}

export default Arrow;