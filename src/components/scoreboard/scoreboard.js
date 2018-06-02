import React, { Component } from 'react'

class Scoreboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      winnerArr: []
    }

  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('props',nextProps)
    console.log('nextstate', nextState)
  }
 
  calculateScoreboard(firstPlayer, secondPlayer) {

  }


  render() {
    return (
      <section className="scoreboard">
        <div className="scoreboard__header"><h4>SCORE</h4></div>
        <div className="scoreboard__score">
          {
            this.state.winnerArr.map((winner, index) => {
              return (
                <div className="scoreboard__round">
                  <div className="scoreboard__round-num">{index + 1}</div>
                  <div className="scoreboard__round-winner">{winner}</div>
                </div>
                    )
            })
          }
      </div>
      </section>
    )
  }

}

export default Scoreboard