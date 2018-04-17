import React from 'react';
import './Reset.css';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline'
import FaRefresh from 'react-icons/lib/fa/refresh';

const Reset = ({handleReset, lever}) => {
  return (
    <div className="reset-container">
      {lever ? (
        <div className="lever-container">
          <div className="lever-text">
            Restart
            <TiArrowRightOutline className="arrow-bounce"/>
          </div>    
          <div className="lever" onClick={handleReset}></div>
        </div>
      ) : (
        <button className="reset-button" onClick={handleReset}>
          <FaRefresh className="refresh-icon"/>
        </button>
      )}
    </div>
  );
}

export default Reset;