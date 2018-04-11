import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';
import Header from './Header/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Board />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));