import React, { Component } from 'react'
import styles from './players.scss'

const playerMapping = {
  'Player 1': 'firstPlayer',
  'Player 2': 'secondPlayer'
}

class Players extends Component {

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e, player) {
    this.props.handleSetName(e.target.value, playerMapping[player])
  }

  render() {
    return (
      <section className="game__players">
        <PlayerInput playerLabel='Player 1'
          handleSetName={this.handleInput}
        />
        <PlayerInput playerLabel='Player 2'
          handleSetName={this.handleInput}
        />
      </section>
    )
  }
}

const PlayerInput = (props) => {

  let placeholder = `Write ${props.playerLabel} name`
  return (
    <div className="player__container" >
      <input type="text" placeholder={placeholder} className="player__text-input" onBlur={(e) => {props.handleSetName(e, props.playerLabel)} }/>
    </div>
  )
}

export default Players