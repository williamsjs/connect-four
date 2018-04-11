import React from 'react';
import ReactDom from 'react-dom';

import Space from '../Space/Space';
import './Row.css';

const Row = () => {
  return (
    <div className="row">
      {Array(7).fill().map((_, i) => <Space key={i+1} />)}
    </div>
  );
}

export default Row;