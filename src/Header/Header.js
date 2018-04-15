import React from 'react';

import './Header.css';

const Header = ({playerOneTurn, gameOver}) => {
  return(
    <div>
      {!gameOver ? (
        <div className="header">
          <h1 className="title">Connect Four</h1>
          <h1 className={playerOneTurn ? 'player-change' : 'hide-player'} >Player <span className="red">One</span> Go!</h1>
          <h1 className={!playerOneTurn ? 'player-change' : 'hide-player'}>Player <span className="black">Two</span> Go!</h1>
        </div>
      ) : (
        <h1>Game Over</h1>
      )}
    </div>
  );
}

export default Header;