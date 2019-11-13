import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuoteMachine from './projects/quote-machine/quote-machine';
import PomodoroClock from './projects/pomodoro-clock/pomodoro-clock';

function App() {
  return (
    <div id="App">
      <h1>Miscellaneous JavaScript Projects</h1>
      <QuoteMachine />
      <PomodoroClock />
      <footer><strong>Created by <a href="https://lucassorenson.github.io" target="_blank" rel="noopener noreferrer">Lucas Sorenson</a></strong></footer>
    </div>
  );
}

export default App;
