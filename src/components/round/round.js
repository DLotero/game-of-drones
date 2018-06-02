import React, { Component } from 'react'
import MoveInput from '../move-input/move-input'

class Round extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlayerName: null //firstPlayer makes first move
    }
  }

  handleMoveInput (e, currentPlayerName) {
    //push move to game
    //toggle to next player
  }

  render() {
    return (
      <section className="round">
        <h3 className="round__header"> ROUND {this.props.round}</h3>
        <div className="round__player-move">
          <h4 className="round__current-player">{this.state.currentPlayerName}</h4>
          <MoveInput handleMoveInput={(e) => this.handleMoveInput(e, this.state.currentPlayerName)} />
        </div>
      </section>
    )
  }
}

export default Round