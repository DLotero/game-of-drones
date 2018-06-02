import React, { Component } from 'react'
import Players from '../players/players'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstPlayer: {
        name: '',
        move: []
      },
      secondPlayer: {
        name: '',
        move: []
      },
      currentPlayer: '',
      round: 0,
      winner: null
    }
  }

  setPlayerName(name, player) {
    this.setState({[player]: name})
  }

  render() {
    return (
        <Players setPlayerName={this.setPlayerName}/>   
    )
  }
}

export default Game