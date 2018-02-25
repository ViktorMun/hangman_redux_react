import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Words from './components/words'
import ActionGuess from './components/actionGuess'

class App extends Component {
  render() {
    return (
      <div className="App">



        <Words />
        <ActionGuess />
      </div>
    );
  }
}

export default App;
