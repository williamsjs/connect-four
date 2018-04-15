import React from 'react';

import './Header.css';

const Header = (props) => {
  return(
    <div className="header">
      <h1 className="title">Connect Four</h1>
      <p className={props.playerOneTurn ? 'player-change' : 'hide-player'} >Player One Go!!!</p>
      <p className={!props.playerOneTurn ? 'player-change' : 'hide-player'}>Player Two Go!!!</p>
    </div>
  );
}

export default Header;