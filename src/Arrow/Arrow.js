import React from 'react';
import ReactDOM from 'react-dom';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down'
import './Arrow.css';

const Arrow = (props) => {

  function sendKey() {
    return props.handleClick(props.colIndex);
  }

  return <FaArrowCircleDown className="arrow" onClick={sendKey}/>;
}

export default Arrow;