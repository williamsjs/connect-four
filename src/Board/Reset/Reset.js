import React from 'react';
import './Reset.css';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline'

const Reset = ({handleReset}) => {
  return (
    <div className="lever-container">
      <div className="lever-text">
        Restart
        <TiArrowRightOutline style={{fontSize: '30px', verticalAlign: 'bottom', marginLeft: '10px'}}/>
      </div>    
      <div className="lever" onClick={handleReset}></div>
    </div>
  );
}

export default Reset;