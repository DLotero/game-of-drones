import React, { Component } from 'react'

class Scoreboard extends Component {
  shouldComponentUpdate(nextProps, nextState){
    let firstPlayer = nextProps.firstPlayer
    let secondPlayer = nextProps.secondPlayer
    if(firstPlayer.moves.length !== secondPlayer.moves.length) return false
    else 
      return true
  }

  renderRoundsScore(winnersPerRound) {
    return winnersPerRound.map((round, index) => {
      return (
        <div className="scoreboard__round" key={round.round}>
          <div className="scoreboard__round-num">{round.round}</div>
          <div className="scoreboard__round-winner">{round.winner}</div>
        </div>)
    })
  }

  render() {
    let firstPlayer = this.props.firstPlayer
    let secondPlayer = this.props.secondPlayer
    let winnersPerRound = this.props.calculateScore(firstPlayer, secondPlayer)
    return (
      <section className="scoreboard">
        <div className="scoreboard__header"><h4>SCORE</h4></div>
        <div className="scoreboard__score">
          {this.renderRoundsScore(winnersPerRound)}
      </div>
      </section>
    )
  }

}

export default Scoreboard