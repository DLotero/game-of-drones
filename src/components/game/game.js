import React, { Component } from 'react'
import Players from '../players/players'
import ActionButton from '../action-button/action-button'
import Scoreboard from '../scoreboard/scoreboard'
import Round from '../round/round'

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
      round: 0,
      winner: null
    }

    this.setPlayerName = this.setPlayerName.bind(this)
    this.addUpToRoundCount = this.addUpToRoundCount.bind(this)
  }

  setPlayerName(playerName, player) {
    this.setState({ [player]: { name: playerName } })
  }

  setRoundMove(player, move) {
    console.log('move')
    console.log(player, move)
  }

  setWinner(winner) {

  }

  addUpToRoundCount() {
    let newRound = this.state.round + 1;
    this.setState({ round: newRound })
  }

  render() {
    let round = this.state.round
    let winner = this.state.winner
    return (
      <div className="game">
        {!round && //game hasn't started yet... ask for players names
          <section className="game__pre-grame">
            <Players handleSetName={this.setPlayerName} />
            <ActionButton action='START!' handleClick={this.addUpToRoundCount} />
          </section>
        }
        {
          (round > 0 && !winner) && //game started... fight!
          <section className="game__in-play">
            <Round round={this.state.round}
              handleAddMove={this.setRoundMove}/>
            <Scoreboard firstPlayer={this.state.firstPlayer}
              secondPlayer={this.state.secondPlayer}
            />
          </section>
        }
        {
          (winner) && // there's a winner
          <section className="game__finished">
            <h1>{winner} THE IRON THRONE IS YOURS.</h1>
            <ActionButton action="PLAY AGAIN" />
          </section>
        }
      </div>
    )
  }
}

export default Game