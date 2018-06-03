import React, { Component } from 'react'

class Round extends Component {
  constructor(props){
    super(props)

    this.state = {
      move: 'rock' //the default
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleMoveInput = this.handleMoveInput.bind(this)
  }

  handleOnChange(e){
    this.setState({ move: e.target.value })
  } 
  
  handleMoveInput(e, currentPlayer) {
    this.props.handleAddMove(this.state.move, this.props.currentPlayer)
    this.setState({ move: 'rock'}) //reset it for next player
  }

  render() {
    return (
      <section className="round">
        <h3 className="round__header"> ROUND {this.props.round}</h3>
        <div className="round__player-move">
          <h4 className="round__current-player">{this.props.playerName}</h4>
          <div className="move-input">
            <div className="move-input__select-wrapper">
              <select className="move-input__select" 
                onChange={this.handleOnChange} 
                value={this.state.move}>
                <option value="rock">Rock</option>
                <option value="paper">Paper</option>
                <option value="scissors">Scissors</option>
              </select>
            </div>
            <button className="move-input__button" onClick={(e) => this.handleMoveInput(e, this.props.currentPlayer)}>MOVE!</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Round