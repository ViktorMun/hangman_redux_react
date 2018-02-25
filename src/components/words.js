import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.rule.wordToShow }</h1>
        { this.props.rule.isWinner ? alert("You win million") : null }
        { this.props.rule.gameOver ? alert("You lost million"): null }
      <div>
        { this.props.rule.wrongGuessCount}
      </div>
      </div>


    )
  }
}

const mapStateToProps = ({rule}) => ({
  rule
})

export default connect(mapStateToProps)(Game)
