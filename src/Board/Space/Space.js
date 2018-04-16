import React from 'react';

import './Space.css';

const Space = ({player, gameOver}) => {

  const background = () => player === 'playerone' ? 
                            {background: 'red'} : 
                            {background: 'black'};

  return (
    <div className="space">
      { player !== null &&
        <div className="chip player-drop" style={background()} ></div>
      }
    </div>
  );
}

export default Space;