export const LETTER_GUESS = 'LETTER_GUESS'

export default (letter) => {
  return {
    type: LETTER_GUESS,
    payload: letter
  }
}
