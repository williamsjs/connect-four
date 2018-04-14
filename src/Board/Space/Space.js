import React from 'react';
import ReactDom from 'react-dom';
import './Space.css';

const Space = (props) => {
  return (
    <div className="space">
      <div className="chip" style={props.style} ></div>
    </div>
  );
}

export default Space;