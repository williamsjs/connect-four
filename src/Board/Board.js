import React, {Component} from 'react';

import Space from './Space/Space';
import Row from '../Shared/Row/Row';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.rows = this.rows.bind(this);
    this.spaces = this.spaces.bind(this);
    this.rowOutput = this.rowOutput.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props.lastColClicked);
  }

  rows(_, i) {
    return (
      <Row key={i}>
        {this.rowOutput(this.spaces(i), 7)}
      </Row>
    );
  }

  spaces(rowIndex) {
    return (_, i) => {
      return <Space key={i} columnIndex={i} rowIndex={rowIndex} />;
    };
  }

  rowOutput(row, num) {
    return Array(num).fill().map(row)
  }

  render() {
    return (
      <div className="board-holder">
        <div className="board">
          {this.rowOutput(this.rows, 6)}
        </div>
      </div>
    )
  }
}

export default Board;