import React from 'react';

import './Space.css';

const Space = (props) => {
  const style = {};

  if (props.player !== null) {
    style.background = props.player === 'playerone' ? 'red' : 'black';
    style.display = 'block';
    style.animation = 'drop 1s linear';
  }

  return (
    <div className="space">
      <div className="chip" style={style} ></div>
    </div>
  );
}

export default Space;