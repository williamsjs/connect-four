import React from 'react';
import './Reset.css';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline'

const Reset = ({handleReset, lever}) => {
  return (
    <div>
      {lever ? (
        <div className="lever-container">
          <div className="lever-text">
            Restart
            <TiArrowRightOutline className="arrow-bounce"/>
          </div>    
          <div className="lever" onClick={handleReset}></div>
        </div>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default Reset;