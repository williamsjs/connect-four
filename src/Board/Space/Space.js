import React from 'react';

import './Space.css';

const Space = ({player, gameOver}) => {

  const background = () => {
    const style = {}
    style.background = player === 'playerone' ? 'red' : 'black';

    if (gameOver) {
      style.animation = 'clearboard 1.5s linear';
    }
    return style;
  }

  return (
    <div className="space">
      { player !== null &&
        <div className="chip player-drop" style={background()} ></div>
      }
    </div>
  );
}

export default Space;