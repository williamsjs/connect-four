import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';
import Header from './Header/Header';
import Container from './Container/Container';

const App = () => {
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));