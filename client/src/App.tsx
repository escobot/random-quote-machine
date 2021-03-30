import React, { Component } from 'react';
import Quotes from './components/Quotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h1>Random Quote Machine</h1>
          </div>
        </header>
        <div className="container">
          <Quotes />
        </div>
      </div>
    );
  }
}

export default App;