import React from 'react';
import './App.css';
import QuoteMachine from './projects/quote-machine/quote-machine';

function App() {
  return (
    <div className="App">
      <h1>Miscellaneous JavaScript Projects</h1>
      <QuoteMachine />
      <footer><strong>Created by <a href="lucassorenson.github.io" target="_blank">Lucas Sorenson</a></strong></footer>
    </div>
  );
}

export default App;
