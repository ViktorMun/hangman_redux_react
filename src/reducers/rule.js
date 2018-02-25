const letter_guess = ''

var word = 'helloworld'
var guesses = []

const game = {
  word: word,
  guesses: guesses,
  wordToShow: showGuess(word, guesses)}

export default (state = game, { type, payload } = {}) => {
  switch(type) {
    case letter_guess :
      let secondState = Object.assign({}, state)
      secondState.guesses.push(payload)
      secondState.wordToShow = showGuess(secondState.word, secondState.guesses)
      secondState.wrongGuessCount = wrongGuessCount(secondState.word, secondState.guesses)
      secondState.isWinner = isWinner(secondState.word, secondState.guesses)
      secondState.gameOver = secondState.wrongGuessCount > 6

      state = secondState
     default :
        return state
  }
}

function showGuess(word, guesses) {
  return word
  .split('')
  .map(char => (guesses.includes(char)? char: ' * '))
  .join('')
}

function wrongGuessCount(word, guesses) {
return guesses
  .filter(guess=> word.indexOf(guess) === -1)
  .length}



function isWinner(word, guesses) {
  return word
  .split('')
  .join('')===showGuess(word,guesses)}
