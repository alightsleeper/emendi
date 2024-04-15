import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A boutique agency serving artists, non-profits, startups and small businesses.
        </p>
        <a
          className="App-link"
          href="mailto:alightsleeper@gmail.com?subject=Emendi%20Inquiry"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
