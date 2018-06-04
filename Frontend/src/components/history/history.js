import React, { Component } from 'react'
import { getGameHistory } from '../../services/gameHistory.service'
import styles from './history.scss'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      historyData: null
    }
  }

  componentDidMount() {
    getGameHistory().then((data) => {
      this.setState({ historyData: data })
    })
  }

  renderHistoryTable(historyData) {
    return (
      <div className="history__table">
        <div className="table__header">
          <div className="table__header-field">Round #</div>
          <div className="table__header-field">Players</div>
          <div className="table__header-field">Winner</div>
          <div className="table__header-field">Date</div>
        </div>
        {
          historyData.map((record, index) => {
            let formattedDate = new Date(record.createdDate).toLocaleString().split(',')[0]
            return (
              <div className="table__record" key={record._id}>
                <div className="table__record-cell">{record.roundsNum}</div>
                <div className="table__record-cell">{record.winner} VS {record.otherPlayer}</div>
                <div className="table__record-cell">{record.winner}</div>
                <div className="table__record-cell">{formattedDate}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    let historyData = this.state.historyData
    return (
      <div className="history">
        {
          historyData &&
          this.renderHistoryTable(historyData)
        }
      </div>
    )
  }
}

export default History