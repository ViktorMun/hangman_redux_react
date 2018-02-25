import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './words.css'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.rule.wordToShow }</h1>
        { this.props.rule.isWinner ? alert("You win million") : null }
        { this.props.rule.gameOver ? alert("You lost million"): null }
      <div>
       <h3>Wrong answers: { this.props.rule.wrongGuessCount} </h3>
      </div>
      </div>


    )
  }
}

const mapStateToProps = ({rule}) => ({
  rule
})

export default connect(mapStateToProps)(Game)
