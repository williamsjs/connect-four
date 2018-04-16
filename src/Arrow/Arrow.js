import React from 'react';

import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down'
import './Arrow.css';

const Arrow = ({colIndex, handleClick, gameOver}) => {

  function sendKey() {
    return handleClick(colIndex);
  }

  return !gameOver ? <FaArrowCircleDown className="arrow" onClick={sendKey}/> : null;
}

export default Arrow;