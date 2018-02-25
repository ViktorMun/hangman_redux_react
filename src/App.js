import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Words from './components/words'
import ActionGuess from './components/actionGuess'
import store from './store'
import showGuess from './reducers/rule'
import guesses from './reducers/rule'

class App extends Component {
  render() {
    return (
      <div className="App">
     <header> Hangman </header>

        <Words />
        <ActionGuess />
        <ul class="list"> </ul>
        <h4>Used letters in console </h4>

      </div>

    );
  }
}



export default App;
