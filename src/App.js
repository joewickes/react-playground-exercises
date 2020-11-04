import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion';
import sections from './state-drills/sections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion />
      </div>
    );
  }
}

export default App;