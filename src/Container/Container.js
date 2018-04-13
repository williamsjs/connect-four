import React from 'react';
import ReactDom from 'react-dom';

import Board from '../Board/Board';
import Arrow from '../Arrow/Arrow';
import Row from '../Shared/Row/Row';
import './Container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(rowIndex) {
    console.log(rowIndex);
  }

  render() {
    return (
      <div className="container">
        <Row style={{height: '20px', marginBottom: '40px'}}>
          {Array(7).fill().map((_, i) => <Arrow key={i+1} rowIndex={i} handleClick={this.handleClick} />)}
        </Row>
        <Board />
      </div>
    );
  }
}

export default Container;