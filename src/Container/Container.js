import React from 'react';
import ReactDom from 'react-dom';

import Board from '../Board/Board';
import Arrow from '../Arrow/Arrow';
import Row from '../Shared/Row/Row';
import './Container.css';

const Container = () => {
  return (
    <div className="container">
      <Row style={{height: '20px'}}>
        {Array(7).fill().map((_, i) => <Arrow key={i+1} />)}
      </Row>
      <Board />
    </div>
  );
}

export default Container;