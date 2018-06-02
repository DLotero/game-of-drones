import React, { Component } from 'react';


class MoveInput extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="move-input">
          <div className="move-input__select-wrapper">
            <select className="move-input__select">
              <option value="rock">Rock</option>
              <option value="paper">Paper</option>
              <option value="scissors">Scissors</option>
            </select>
          </div>
        </div>
      )
  }
}

export default MoveInput