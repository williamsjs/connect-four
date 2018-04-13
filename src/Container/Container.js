import React from 'react';
import ReactDom from 'react-dom';

import Board from '../Board/Board';
import Arrow from '../Arrow/Arrow';
import Row from '../Shared/Row/Row';
import './Container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  createBoard() {
    return Array(6).fill().map(arr => Array(7).fill('O'));
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