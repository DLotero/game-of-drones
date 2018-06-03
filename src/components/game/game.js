import React, { Component } from 'react'
import Players from '../players/players'
import ActionButton from '../action-button/action-button'
import Scoreboard from '../scoreboard/scoreboard'
import Round from '../round/round'

const beats = {
  paper: 'rock',
  rock: 'scissors',
  scissors: 'paper'
}

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
      currentPlayer: null,
      round: 0,
      winner: null
    }

    this.setPlayerName = this.setPlayerName.bind(this)
    this.setRoundNum = this.setRoundNum.bind(this)
    this.startGame = this.startGame.bind(this)
    this.toNextRound = this.toNextRound.bind(this)
  }

  toggleCurrentPlayer(){
    let currentPlayer = this.state.currentPlayer
    let nextPlayer = (!currentPlayer) ? 
     'firstPlayer':
     (currentPlayer === 'firstPlayer') 
      ? 'secondPlayer': 'firstPlayer'
    this.setState({ currentPlayer: nextPlayer })
  }

  startGame() {
    this.toggleCurrentPlayer()
    this.toNextRound(1)
  }

  validateEndGame() {
    //is there a winner?
    let currentScore = this.calculateScoreboard(this.state.firstPlayer, this.state.secondPlayer)
    this.validateWinner(currentScore)
  }

  setPlayerName(playerName, player) {
    this.setState({ [player]: { name: playerName, moves:[] } }) //if we're setting player's name no moves have been done yet
  }

  setRoundMove(move, player) {
    let currentPlayer = this.state[player]
    currentPlayer.moves.push(move)
    this.setState({ [player]: Object.assign({}, currentPlayer)})
    /* if current player is the second one 
     * the continuation of the game needs to be validated
     */
    if(player === 'secondPlayer') this.validateEndGame()
    else this.toggleCurrentPlayer() //it's time for the next player to move
  }

  calculateScoreboard(firstPlayer, secondPlayer) {
    return firstPlayer.moves.map((move, index) => {
      let secondPlayerMove = secondPlayer.moves[index]
      let roundNo = index + 1 
      if(move === secondPlayerMove) return { winner: 'TIE ', round:roundNo}
      if(beats[move] === secondPlayerMove ) {
        /* if first player's move beats second player's move
         * first player wins */
        return { winner: firstPlayer.name, round: roundNo}
      }                                       
      return { winner: secondPlayer.name, round: roundNo}
    })
  }

  setWinner(winner) {
    this.setState({ winner: winner})
  }

  toNextRound() {
    let nextRound = this.state.round + 1
    this.setState({ round: nextRound })
  }

  render() {
    let round = this.state.round
    let winner = this.state.winner
    let currentPlayer = this.state.currentPlayer
    return (
      <div className="game">
        {!round && //game hasn't started yet... ask for players names
          <section className="game__pre-grame">
            <Players handleSetName={this.setPlayerName} />
            <ActionButton action='START!' handleClick={this.startGame} />
          </section>
        }
        {
          (round > 0 && !winner) && //game started... fight!
          <section className="game__in-play">
            <Round round={round}
              handleAddMove={this.setRoundMove}
              currentPlayer={currentPlayer}
              playerName={this.state[currentPlayer].name}
            />
            <Scoreboard firstPlayer={this.state.firstPlayer}
              secondPlayer={this.state.secondPlayer}
              calculateScore={this.calculateScoreboard}
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
        <div>{this.state.currentPlayer}</div>
      </div>
    )
  }
}

export default Game