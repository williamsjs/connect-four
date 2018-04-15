import React from 'react';

import './Space.css';

const Space = (props) => {
  const style = {};

  if (props.player !== null) {
    style.background = props.player === 'playerone' ? 'red' : 'black';
    style.display = 'block';
    console.log(style);
  }

  return (
    <div className="space">
    {props.player}
      <div className="chip" style={style} ></div>
    </div>
  );
}

export default Space;