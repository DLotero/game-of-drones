import React, { Component } from 'react'
import Players from '../players/players'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstPlayer: {
        name: '',
        moves: []
      },
      secondPlayer: {
        name: '',
        moves: []
      },
      currentPlayer: 'firstPlayer', //firstPlayer makes first move
      round: 0,
      winner: null
    }

    this.setPlayerName = this.setPlayerName.bind(this)
  }

  setPlayerName(playerName, player) {
    this.setState({ [player]: {name: playerName}})
  }

  render() {
    let round = this.state.round

    return (
      <div className="game">
      {!round && //game hasn't started yet... ask for players names
        <Players handleSetName={this.setPlayerName}/>
      }
      {
        round > 0 && //game started... fight!
        <div></div>
      }
      <div>{this.state.firstPlayer.name}</div>
      <div>{this.state.secondPlayer.name}</div>
      </div>
    )
  }
}

export default Game