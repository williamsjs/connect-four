import React from 'react';

import Reset from '../Shared/Reset/Reset';
import './Header.css';

const Header = ({playerOneTurn, gameOver, handleReset}) => {
  return(
    <div>
      {!gameOver ? (
        <div className="header">
          <h1 className="title">Connect Four</h1>
          <h1 className={playerOneTurn ? 'player-change' : 'hide-player'} >Player <span className="red">One</span> Go!</h1>
          <h1 className={!playerOneTurn ? 'player-change' : 'hide-player'}>Player <span className="black">Two</span> Go!</h1>
        </div>
      ) : (
        <h1 className="game-over">{gameOver.split('player').join('player ')}</h1>
      )}
      <Reset handleReset={handleReset} lever={false} />
    </div>
  );
}

export default Header;