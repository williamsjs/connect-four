import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';
import Container from './Container/Container';

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));