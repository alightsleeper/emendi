import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="main-body">
        <img src={logo} className="main-logo" alt="Emendi Tech &amp; Creative" />
        <p className="lexend-giga-bold">
          A boutique agency serving artists, nonprofits, startups and small businesses.
        </p>
        <a
          className="main-link lexend-giga-bold"
          href="mailto:alightsleeper@gmail.com?subject=Emendi%20Inquiry"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </>
  );
}

export default App;
