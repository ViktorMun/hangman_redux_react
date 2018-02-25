import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Words from './components/words'
import ActionGuess from './components/actionGuess'

class App extends Component {
  render() {
    return (
      <div className="App">


  <h1>
  <span>H</span>
  <span>A</span>
  <span>N</span>
  <span>G</span>
  <span>M</span>
  <span>A</span>
  <span>N</span>
  </h1>



        <Words />
        <ActionGuess />
        <ul class="list"> </ul>
        <h4>Used letters in console </h4>

      </div>

    );
  }
}



export default App;
