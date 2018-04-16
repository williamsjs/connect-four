import React from 'react';
import './Reset.css';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline'

const Reset = (props) => {
  return (
    <div className="lever-container">
      <div className="lever-text">
        Restart
        <TiArrowRightOutline style={{fontSize: '30px', verticalAlign: 'bottom', marginLeft: '10px'}}/>
      </div>    
      <div className="lever"></div>
    </div>
  );
}

export default Reset;