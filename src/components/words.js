import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.rule.wordToShow }</h1>

      </div>
    )
  }
}

const mapStateToProps = ({rule}) => ({
  rule
})

export default connect(mapStateToProps)(Game)
