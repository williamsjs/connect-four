import React from 'react';

import './Header.css';

const Header = (props) => {
  return(
    <div className="header">
      <h1 className="title">Connect Four</h1>
      <h1 className={props.playerOneTurn ? 'player-change' : 'hide-player'} >Player One Go!!!</h1>
      <h1 className={!props.playerOneTurn ? 'player-change' : 'hide-player'}>Player Two Go!!!</h1>
    </div>
  );
}

export default Header;