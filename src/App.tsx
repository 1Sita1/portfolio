import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { process.env.REACT_APP_TEST }
      </header>
    </div>
  );
}

export default App;
